export type Lang = "en" | "hi";

export const t = (lang: Lang) => ({
  // Navbar
  home: lang === "en" ? "⌂ Home" : "⌂ होम",
  notices: lang === "en" ? "📢 Notices" : "📢 सूचनाएं",
  achievements: lang === "en" ? "🏆 Achievements" : "🏆 उपलब्धियां",
  viewAllIssues: lang === "en" ? "View All Issues" : "सभी समस्याएं",
  login: lang === "en" ? "Login" : "लॉगिन",
  logout: lang === "en" ? "Logout" : "लॉगआउट",
  admin: lang === "en" ? "Admin" : "एडमिन",

  // Home page
  reportProblem: lang === "en" ? "Report a Problem →" : "समस्या दर्ज करें →",
  totalProblems: lang === "en" ? "Total Problems" : "कुल समस्याएं",
  pending: lang === "en" ? "Pending" : "लंबित",
  inProgress: lang === "en" ? "In Progress" : "प्रक्रिया में",
  resolved: lang === "en" ? "Resolved" : "हल हुई",
  issuesByCategory: lang === "en" ? "Issues by Category" : "श्रेणी अनुसार समस्याएं",
  issues: lang === "en" ? "issues" : "समस्याएं",
  noIssuesYet: lang === "en" ? "No issues reported yet" : "अभी कोई समस्या दर्ज नहीं",
  beFirst: lang === "en" ? "Be the first to report a problem in your village." : "अपने गांव की पहली समस्या दर्ज करें।",
  submitFirst: lang === "en" ? "Submit First Problem →" : "पहली समस्या दर्ज करें →",
  yourSarpanch: lang === "en" ? "Your Sarpanch" : "आपके सरपंच",

  // Submit form
  loginRequired: lang === "en" ? "Login Required" : "लॉगिन आवश्यक है",
  loginToSubmit: lang === "en" ? "Please sign in to submit a problem" : "समस्या दर्ज करने के लिए लॉगिन करें",
  signIn: lang === "en" ? "Sign In" : "लॉगिन करें",

  // Feedback
  shareYourFeedback: lang === "en" ? "Share your suggestions" : "अपने सुझाव साझा करें",
  yourName: lang === "en" ? "Your name" : "आपका नाम",
  yourFeedback: lang === "en" ? "Your feedback, suggestions or appreciation..." : "आपके सुझाव या प्रशंसा...",
  submitFeedback: lang === "en" ? "Submit Feedback →" : "सुझाव भेजें →",

  // Categories
  waterSupply: lang === "en" ? "Water Supply" : "जल आपूर्ति",
  road: lang === "en" ? "Road / Path" : "सड़क / रास्ता",
  electricity: lang === "en" ? "Electricity" : "बिजली",
  drainage: lang === "en" ? "Drainage" : "नाली",
  sanitation: lang === "en" ? "Sanitation" : "स्वच्छता",
  education: lang === "en" ? "Education" : "शिक्षा",
  health: lang === "en" ? "Health" : "स्वास्थ्य",
  streetLight: lang === "en" ? "Street Light" : "स्ट्रीट लाइट",
  other: lang === "en" ? "Other" : "अन्य",

  // Made by
  madeWith: lang === "en" ? "Made with ❤️ by Abhinav Yadav" : "❤️ से बनाया — अभिनव यादव",
});
