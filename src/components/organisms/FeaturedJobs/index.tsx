import TitleSection from "@/components/atoms/TitlteSection";
import React, { FC } from "react";
import JobItems from "./JobItems";

interface FeaturedJobsProps {}

const FeaturedJobs: FC<FeaturedJobsProps> = ({}) => {
  return (
    <div className="mt-32 mb-10">
      <TitleSection word1="Feature" word2="jobs" />
      <div className="grid grid-cols-4 gap-8 mt-12">
        {[0, 1, 2].map((item: number) => (
          <JobItems
            key={item}
            image="/images/company.png"
            jobType="Full time"
            name="Email Marketing"
            type="Agency"
            location="Paris"
            desc="lorem lorem dasdd daidhi i d w q ewf kfd kffahfkfkhjsdf heuudabshhd "
            categories={["Marketing", "Design"]}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
