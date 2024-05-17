import { Genre } from "@/app/lib/definitions";
import { toSnakeCase } from "@/app/lib/utils";
import clsx from "clsx";
import { DraftModeProvider } from "next/dist/server/async-storage/draft-mode-provider";
import Link from "next/link";
import { Fragment } from "react";

const Table = ({
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
      <table className="border">
         <TableRow title="Title" content={movie.title} />
         <TableRow title="Tagline" content={movie.tagline} />
         <TableRow title="Genres" content={movie.genres} />
         <TableRow title="Production Countries" content={movie.production_countries} />
         <TableRow title="Homepage" content={movie.homepage} isLink={true} />
         <TableRow title="Status" content={movie.status} />
         <TableRow title="Overview" content={movie.overview} />
      </table>
   );
};

const TableRow = ({ title, content, isLink }: { title: string; content: string | object; isLink?: boolean }) => {
   return (
      <tr>
         <TableTitle title={title} />
         {typeof content === "string" ? isLink ? <TableContentString text={content} isActive={isLink} /> : <TableContentString text={content} /> : <TableContentObject arr={content} />}
      </tr>
   );
};

const TableTitle = ({ title }: { title: string }) => {
   return <td className="p-2 font-semibold border-b text-sm md:text-base">{title}</td>;
};

export const TableContentString = ({ text, isActive }: { text: string; isActive?: boolean }) => {
   const className = "border-l border-b p-2 text-sm md:text-base";

   return isActive ? (
      <td className={className}>
         <Link href={text} className="text-blue-700 hover:text-blue-500" target="_blank">
            {text ? text : "-"}
         </Link>
      </td>
   ) : (
      <td className={clsx(className, { "text-green-600": text.match(/released/i) })}>{text ? text : "-"}</td>
   );
};

export const TableContentObject = ({ arr }: Genre[] | any) => {
   return (
      <td className="py-1 px-2 border-b border-l text-sm md:text-base">
         {arr.map((el: Genre | any, index: number) => {
            const NAME = index !== arr.length - 1 ? `${el.name}, ` : el.name;

            return el?.id ? (
               <Link href={`/movie/genre/${toSnakeCase(el.name)}_${el.id}`} className="text-blue-700 hover:text-blue-500">
                  {NAME}
               </Link>
            ) : (
               <span>{NAME}</span>
            );
         })}
      </td>
   );
};

export default Table;