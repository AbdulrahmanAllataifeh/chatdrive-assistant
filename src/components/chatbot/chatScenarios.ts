
interface Step {
  user: string;
  assistant: string;
}

interface Scenario {
  title: string;
  steps: Step[];
}

export const scenarios: Record<string, Scenario> = {
  testDrive: {
    title: "Book a Test Drive - Pre-Owned INFINITI",
    steps: [
      {
        user: "Hi, I'm interested in booking a test drive for a pre-owned INFINITI QX60.",
        assistant: "Great choice! 🚗 The QX60 is a popular model. May I know your preferred date and time for the test drive?"
      },
      {
        user: "Tomorrow afternoon, around 3 PM.",
        assistant: "Got it. Just checking availability at your nearest AWR dealership...\n\n✅ A slot is available tomorrow at 3 PM in Al Quoz. Would you like me to confirm your booking?"
      },
      {
        user: "Yes, please.",
        assistant: "Done! 🎉 You're all set. You'll receive a confirmation SMS shortly. Anything else I can help you with—trade-in, financing, or directions?"
      },
      {
        user: "Nope, that's perfect. Thanks!",
        assistant: "My pleasure. See you at the dealership!"
      }
    ]
  },
  rental: {
    title: "Extend a Rental",
    steps: [
      {
        user: "Hey, I need to extend my rental for 3 more days.",
        assistant: "I can help with that right away! Can you please confirm your booking number or phone number used for the reservation?"
      },
      {
        user: "It's 024578. Phone number is 0501234567.",
        assistant: "Thanks! 📋 Found your booking for the Nissan Patrol, ending tomorrow.\n\nWould you like to extend it till Sunday, April 21st?"
      },
      {
        user: "Yes, please.",
        assistant: "✅ Extension confirmed. We've updated your rental agreement. You'll receive an updated invoice shortly.\n\nNeed the car delivered or any add-ons?"
      },
      {
        user: "Nope, that's all.",
        assistant: "Awesome. Safe travels, and let me know if anything else comes up!"
      }
    ]
  },
  financing: {
    title: "Explore Financing Options",
    steps: [
      {
        user: "I want to check financing options for a new INFINITI Q50.",
        assistant: "Absolutely! Would you prefer Islamic or conventional financing?"
      },
      {
        user: "Conventional.",
        assistant: "Got it. Based on current rates, your estimated monthly payment for the Q50 (starting AED 145,000) would be around AED 2,200/month over 5 years with 20% down.\n\nWant a personalized quote?"
      },
      {
        user: "Yes.",
        assistant: "Just a few quick questions:\n\n1️⃣ Your monthly income?\n2️⃣ Are you currently employed in the UAE?\n3️⃣ Would you prefer dealer or bank financing?"
      },
      {
        user: "Monthly income is 15K AED, yes employed, and dealer financing is fine.",
        assistant: "Thanks! 📊 Based on that, you're pre-qualified for multiple plans.\n\nI've sent you a detailed breakdown by email. Want me to connect you with a finance advisor now?"
      },
      {
        user: "Yes, do that.",
        assistant: "Connecting you now—expect a call in the next 10 minutes. 😊"
      }
    ]
  }
};
