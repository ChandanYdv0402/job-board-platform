import {getRequiredUser} from "@/lib/auth-session";

type PageParams = {
  params: Promise<{

  }>
}

export default async function RoutePage(props: PageParams) {
  const params = await props.params;
  await getRequiredUser()

  return (
    <div>
      <p>Protected page</p>
    </div>
  )
}
