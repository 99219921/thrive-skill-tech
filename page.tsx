import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, GraduationCap, ShieldCheck, Sparkles } from "lucide-react";
import { HeroSection } from "@/components/public/hero";
import { SectionHeading } from "@/components/section-heading";
import { CourseCard } from "@/components/course-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { FAQList } from "@/components/faq-list";
import { Button } from "@/components/ui/button";
import { courses, testimonials } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="container-shell py-16">
        <SectionHeading
          title="Featured Programs"
          description="Choose the learning path that matches your starting point and career ambition."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {courses.map((course) => <CourseCard key={course.slug} course={course} />)}
        </div>
      </section>

      <section className="container-shell py-16">
        <SectionHeading
          title="Why choose Thrive Skill Tech"
          description="Built for practical outcomes, not just passive watching."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["Practical learning", "Assignments, workflows, and execution-first training.", GraduationCap],
            ["Career support", "Resume building, interview readiness, and internship direction.", BriefcaseBusiness],
            ["Trusted foundation", "Registered Indian ed-tech company with clear company credentials.", ShieldCheck],
            ["Skill to income", "Courses designed to help learners move toward paid work.", Sparkles]
          ].map(([title, desc, Icon]) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <Icon className="h-8 w-8 text-brand-gold" />
              <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-zinc-300">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-shell py-16">
        <SectionHeading
          title="Career outcomes"
          description="Our programs are structured to help learners build confidence, output, and professional direction."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            "Build a creator-ready content workflow",
            "Develop practical digital marketing and SEO foundations",
            "Create portfolios, resume assets, and career-ready outputs"
          ].map((item) => (
            <div key={item} className="rounded-3xl border border-brand-green/20 bg-brand-green/10 p-6 text-zinc-100">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="container-shell py-16">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-brand-gold/10 to-brand-green/10 p-8 shadow-glow sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-brand-gold">Free webinar</p>
              <h2 className="mt-3 text-3xl font-bold text-white">Start with a high-value free session</h2>
              <p className="mt-3 max-w-2xl text-zinc-300">
                Join our free webinar to understand practical career paths in content, marketing, AI tools, and social media. Includes certificate guidance and next-step clarity.
              </p>
            </div>
            <Link href="/webinar">
              <Button size="lg" className="gap-2">
                Join Free Webinar <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="container-shell py-16">
        <SectionHeading title="What learners say" />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => <TestimonialCard key={item.name} {...item} />)}
        </div>
      </section>

      <section className="container-shell py-16">
        <SectionHeading title="Frequently asked questions" />
        <FAQList />
      </section>
    </>
  );
}
