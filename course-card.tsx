import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Course } from "@/lib/data";
import { currency } from "@/lib/utils";

export function CourseCard({ course }: { course: Course }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="mb-3 flex items-center justify-between">
          <Badge>{course.level}</Badge>
          {course.badge ? <Badge className="border-brand-gold/30 bg-brand-gold/10 text-brand-gold">{course.badge}</Badge> : null}
        </div>
        <CardTitle>{course.title}</CardTitle>
        <CardDescription className="mt-2">{course.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-5 text-3xl font-bold text-white">{currency(course.price)}</div>
        <ul className="space-y-3 text-sm text-zinc-300">
          {course.modules.slice(0, 4).map((item) => (
            <li key={item} className="flex items-start gap-2">
              <BadgeCheck className="mt-0.5 h-4 w-4 text-brand-green" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex gap-3">
        <Link href={`/courses/${course.slug}`} className="flex-1">
          <Button className="w-full">View Details</Button>
        </Link>
        <Button variant="outline" className="gap-2">
          Enroll <ArrowRight size={16} />
        </Button>
      </CardFooter>
    </Card>
  );
}
