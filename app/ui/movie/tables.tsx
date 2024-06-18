import { Genre } from "@/app/lib/definitions";
import { toSnakeCase } from "@/app/lib/utils";
import clsx from "clsx";
import Link from "next/link";

const TableWrapper = ({
   movie,
}: {
   movie: {
      title: string;
      tagline: string;
      genres: Genre[];
      production_countries: any;
      homepage: string;
      status: string;
      release_date: string;
      overview: string;
   };
}) => {
   return (
      <div className="flex flex-col md:flex-row flex-wrap gap-4">
         <Table title="Title" content={movie.title}></Table>
         <Table title="Tagline" content={movie.tagline}></Table>
         <Table title="Genre" content={movie.genres} isLink={true}></Table>
         <Table title="Homepage" content={movie.homepage} isLink={true}></Table>
         <Table title="Status" content={movie.status}></Table>
         <Table title="Production Countries" content={movie.production_countries}></Table>
         <Table title="Overview" content={movie.overview}></Table>
      </div>
   );
};

const Table = ({ title, content, isLink }: { title: string; content: any; isLink?: boolean }) => {
   const filteredContent = typeof content === "string" ? <ContentString content={content} isLink={isLink} /> : <ContentObject content={content} isLink={isLink} />;

   return (
      <div className="grow border rounded-md text-center">
         <h4 className="py-2 font-bold bg-neutral-200 border-b dark:bg-neutral-700 rounded-t-md">{title}</h4>
         {filteredContent}
      </div>
   );
};

const ContentString = ({ content, isLink }: { content: string; isLink?: boolean }) => {
   const newContent = !content ? (
      "-"
   ) : isLink ? (
      <Link href={content} className="text-blue-500 hover:text-blue-700 duration-100">
         {content}
      </Link>
   ) : (
      content
   );

   return <p className="p-2">{newContent}</p>;
};

const ContentObject = ({ content, isLink }: { content: any; isLink?: boolean }) => {
   const className = clsx({
      "inline-block text-blue-500 hover:text-blue-700 duration-100 me-1": isLink,
      "me-1": !isLink,
   });

   const newContent = content.map((c: any, i: number) => {
      return isLink ? (
         <Link key={c.name} href={`/movie/genre/${toSnakeCase(c.name)}_${c.id}`} className={className}>
            {c.name}
            {i !== content.length - 1 && <span className="cursor-default text-neutral-900">,</span>}
         </Link>
      ) : (
         <span key={c.name} className={className}>
            {c.name}
         </span>
      );
   });

   return <p className="p-2">{newContent}</p>;
};

export default TableWrapper;
