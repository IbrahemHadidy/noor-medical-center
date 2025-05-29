import { getApiDocs } from '@/lib/swagger';
import ReactSwagger from './react-swagger';

export default async function IndexPage() {
  const spec = await getApiDocs();

  return (
    <html lang="en">
      <body>
        <section className="container">
          <ReactSwagger spec={spec} />
        </section>
      </body>
    </html>
  );
}
