import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { marked } from "marked";

const contentDir = path.join(process.cwd(), "public/content");

export async function generateStaticParams() {
  const files = fs.readdirSync(contentDir);
  return files.map((file) => ({
    slug: file.replace(".md", ""),
  }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  // Await the params to ensure they are resolved before use.
  const { slug } = await params;

  const filePath = path.join(contentDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return notFound();
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const htmlContent = marked(fileContent);

  return (
    <div>
      <div className="w-1/2 h-[1232px] bg-[#DB2B3950] rounded-[800px] blur-[400px] fixed inset-x-[25%] top-[-20%] z-[-1] absolute"></div>
      <div className="flex flex-col w-[330px] sm:w-[560px] md:w-[650px] lg:w-[900px] xl:w-[980px] 2xl:w-[1036px] py-10 lg:py-[140px] justify-center mx-auto">

        <article className="prose prose-lg prose-stone dark:prose-invert">
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </article>
      </div>

    </div>
  );
}
