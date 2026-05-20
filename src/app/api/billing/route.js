import { mockOrganization } from "@/entities/organization";
import { createBillingPortalSession, getCurrentSubscription } from "@/features/billing";
import { errorResponse } from "@/lib/http/errors";

export async function GET() {
  try {
    const subscription = await getCurrentSubscription();
    return Response.json({ subscription });
  } catch (error) {
    return errorResponse(error);
  }
}

export async function POST() {
  try {
    const session = await createBillingPortalSession({ organizationId: mockOrganization.id });
    return Response.json({ session });
  } catch (error) {
    return errorResponse(error);
  }
}
