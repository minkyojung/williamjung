import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import ImgCard from "@/components/ui/imgcard";

export default function Home() {
  return (
    <main className="flex flex-col items-center mt-6 w-full">
      <div className="flex flex-row justify-center min-w-[900px] my-4 flex-wrap scale-90">
      <ImgCard 
        src="/christmas.jpg"
        title="Merry Christmas" 
        subtitle="Lorem ipsum dolor sit amet consectetur. Lorem rhoncuLorem ipsum dolor sit arna s orci urna"
        className="flex-auto basis-1/4 mx-0.1">
      </ImgCard>
      <ImgCard 
        src="/frankfrut_street.jpg"
        title="Frankfurt Street" 
        subtitle="Lorem ipsum dolor sit amet cLorem ipsum dolor sit amet crna onsectetur. Lorem rhoncus orci urna"
        className="flex-auto basis-1/4 mx-0.1">
      </ImgCard>
      <ImgCard 
        src="/rudesheim.jpg"
        title="Rudesheim" 
        subtitle="Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet conrci urna orem rhoncus orci urna"
        className="flex-auto basis-1/4 mx-0.1">
      </ImgCard>
      <ImgCard 
        src="/rudesheim.jpg"
        title="Rudesheim" 
        subtitle="Lorem ipsum dolor sit amet consectetur. Lorem rhoncus orci urna Lorem ipsum d Lorem rhoncus orci urna "
        className="flex-auto basis-1/4 mx-0.1">
      </ImgCard>
      </div>
      <Card className="mb-4 shadow-none border-zinc-950">
        <CardContent>
          {/* Content here can be updated or left empty depending on your needs */}
        </CardContent>
      </Card>
    </main>
  );
}
