import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { generateTokenAndSetCookie } from "../utils/generateToken.js";

export async function signup(req, res) {
	try {
		const { email, password, username } = req.body;

		if (!email || !password || !username) {
			return res.status(400).json({ success: false, message: "All fields are required" });
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (!emailRegex.test(email)) {
			return res.status(400).json({ success: false, message: "Invalid email" });
		}

		if (password.length < 6) {
			return res.status(400).json({ success: false, message: "Password must be at least 6 characters" });
		}

		const existingUserByEmail = await User.findOne({ email: email });

		if (existingUserByEmail) {
			return res.status(400).json({ success: false, message: "Email already exists" });
		}

		const existingUserByUsername = await User.findOne({ username: username });

		if (existingUserByUsername) {
			return res.status(400).json({ success: false, message: "Username already exists" });
		}

		const salt = await bcryptjs.genSalt(10);
		const hashedPassword = await bcryptjs.hash(password, salt);

		const PROFILE_PICS = ["/avatar1.png", "/avatar2.png", "/avatar3.png"];

		const image = PROFILE_PICS[Math.floor(Math.random() * PROFILE_PICS.length)];

		const newUser = new User({
			email,
			password: hashedPassword,
			username,
			image,
		});

		await newUser.save();
		generateTokenAndSetCookie(newUser._id, res);

		res.status(201).json({
			success: true,
			message: "Account created successfully",
			user: {
				_id: newUser._id,
				username: newUser.username,
				email: newUser.email,
				image: newUser.image
			}
		});
	} catch (error) {
		console.error("Signup error:", error);
		res.status(500).json({
			success: false,
			message: error.message || "Internal server error during signup"
		});
	}
}

export async function login(req, res) {
	try {
		const { email, password } = req.body;

		// Validation
		if (!email || !password) {
			return res.status(400).json({ 
				success: false, 
				message: "Please provide both email and password" 
			});
		}

		// Find user
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(401).json({ 
				success: false, 
				message: "Invalid email or password" 
			});
		}

		// Check password
		const isPasswordCorrect = await bcryptjs.compare(password, user.password);
		if (!isPasswordCorrect) {
			return res.status(401).json({ 
				success: false, 
				message: "Invalid email or password" 
			});
		}

		// Generate token and set cookie
		generateTokenAndSetCookie(user._id, res);

		// Send response
		res.status(200).json({
			success: true,
			message: "Login successful",
			user: {
				_id: user._id,
				username: user.username,
				email: user.email,
				image: user.image
			}
		});
	} catch (error) {
		console.error("Login error:", error);
		res.status(500).json({ 
			success: false, 
			message: "Internal server error during login",
			error: error.message 
		});
	}
}

export async function logout(req, res) {
	try {
		res.clearCookie("jwt-netflix");
		res.status(200).json({ success: true, message: "Logged out successfully" });
	} catch (error) {
		console.log("Error in logout controller", error.message);
		res.status(500).json({ success: false, message: "Internal server error" });
	}
}

export async function authCheck(req, res) {
	try {
		console.log("req.user:", req.user);
		res.status(200).json({ success: true, user: req.user });
	} catch (error) {
		console.log("Error in authCheck controller", error.message);
		res.status(500).json({ success: false, message: "Internal server error" });
	}
}
