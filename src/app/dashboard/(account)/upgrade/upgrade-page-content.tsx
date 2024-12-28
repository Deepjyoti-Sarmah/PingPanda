import { Plan } from "@prisma/client"
import { useRouter } from "next/router"

export const UpgradePageContent = ({ plan }: { plan: Plan }) => {
  const router = useRouter()

  return (
    <div>UpgradePageContent</div>
  )
}

