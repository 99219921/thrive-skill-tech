import { courses } from "@/lib/data";

export function CourseComparison() {
  const [basic, premium] = courses;

  return (
    <div className="overflow-hidden rounded-3xl border border-white/10">
      <table className="w-full text-left text-sm">
        <thead className="bg-white/5 text-zinc-200">
          <tr>
            <th className="p-4">Feature</th>
            <th className="p-4">{basic.title}</th>
            <th className="p-4">{premium.title}</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10 text-zinc-300">
          <tr>
            <td className="p-4">Price</td>
            <td className="p-4">₹2,999</td>
            <td className="p-4">₹60,000</td>
          </tr>
          <tr>
            <td className="p-4">Best For</td>
            <td className="p-4">Beginners, creators</td>
            <td className="p-4">Career-focused serious learners</td>
          </tr>
          <tr>
            <td className="p-4">Delivery</td>
            <td className="p-4">Live + Recorded</td>
            <td className="p-4">Live + Recorded</td>
          </tr>
          <tr>
            <td className="p-4">Career Support</td>
            <td className="p-4">Basic</td>
            <td className="p-4">Advanced resume, interview, internship</td>
          </tr>
          <tr>
            <td className="p-4">Freelancing / Client Acquisition</td>
            <td className="p-4">—</td>
            <td className="p-4">Included</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
