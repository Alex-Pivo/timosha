import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) 


{
  const messages = await getMessages();
  const locale = await getLocale();
  return(
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
  );
}
