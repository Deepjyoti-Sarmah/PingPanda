import { clerkClient } from "@clerk/nextjs/server";

export async function POST() {
  try {
    const temporaryPassword = Math.random().toString(36).slice(-8);
    const guestUser = await clerkClient.users.createUser({
      emailAddress: `guest_${Date.now()}@temporary.com`,
      password: temporaryPassword,
      firstName: "Guest",
      lastName: `User_${Date.now()}`,
      publicMetadata: {
        isGuest: true,
        createdAt: new Date().toISOString(),
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
      },
    });


  } catch (error) {
    console.error("Error creating guest user:", error)
    return Response.json(
      { error: "Failed to create guest user" },
      { status: 500 }
    );
  }
}
