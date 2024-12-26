import { CATEGORY_NAME_VALIDATOR } from "@/lib/validators/category-validator";
import { NextRequest } from "next/server";
import { z } from "zod";

const REQUEST_VALIDATOR = z.object({
  category: CATEGORY_NAME_VALIDATOR,
  fields: z.record(z.string().or(z.number()).or(z.boolean())).optional(),
  description: z.string().optional(),
}).strict()

export const POST = async (req: NextRequest) => {

}
