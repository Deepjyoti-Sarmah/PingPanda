import { MaxWidthWrapper } from "./components/max-width-wrapper";

export default async function Home() {
  return (
    <>
      <section className="relative py-24 sm:py-32 bg-brand-25">
        <MaxWidthWrapper classname="text-center">
          <div className="relative mx-auto text-center flex flex-col items-center gap-10">
            <div></div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section></section>
      <section></section>
      <section></section>
    </>
  )

}
