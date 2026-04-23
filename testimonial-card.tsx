import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function TestimonialCard({
  name,
  role,
  content
}: {
  name: string;
  role: string;
  content: string;
}) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-base">{name}</CardTitle>
        <p className="text-sm text-brand-gold">{role}</p>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-7 text-zinc-300">{content}</p>
      </CardContent>
    </Card>
  );
}
