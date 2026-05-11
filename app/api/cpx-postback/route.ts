import { NextRequest, NextResponse } from "next/server";
import admin from "firebase-admin";
import { db } from "@/lib/firebase-admin";

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;

    const userId = searchParams.get("subId");
    const reward = Number(searchParams.get("reward"));

    if (!userId || !reward) {
      return NextResponse.json({
        success: false,
        message: "Missing parameters",
      });
    }

    const userRef = db.collection("users").doc(userId);

    await userRef.update({
      balance: admin.firestore.FieldValue.increment(reward),
      surveysCompleted: admin.firestore.FieldValue.increment(1),
    });

    return NextResponse.json({
      success: true,
      message: "Reward added",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error,
    });
  }
}