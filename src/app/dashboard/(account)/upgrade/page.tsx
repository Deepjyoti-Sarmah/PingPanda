import { currentUser } from "@clerk/nextjs/server"

const Page = async () => {
  const auth = await currentUser()
  return (
    <div>Page</div>
  )
}

export default Page
