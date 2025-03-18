import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"



import {Interview} from "@/types";
import { CustomBreadCrumb } from "./custom-bread-crumb";
import { useEffect } from "react";

interface FormMockInterview{
    initialData : Interview | null;
}

const formSchema = z.object({
  position: z
    .string()
    .min(1, "Position is required")
    .max(100, "Position must be 100 characters or less"),
  description: z.string().min(10, "Description is required"),
  experience: z.coerce
    .number()
    .min(0, "Experience cannot be empty or negative"),
  techStack: z.string().min(1, "Tech stack must be at least a character"),
});

type FormData = z.infer<typeof formSchema>;

export const FormMockInterview = ({ initialData }: FormMockInterviewProps) => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {},
  })

  useEffect(()=> {
    if(initialData){
      form.reset({
        position : initialData.position,
        description : initialData.description,
        experience : initialData.experience,
        techStack : initialData.techStack
      })
    }
  } , [initialData , form])

  return(

   <div className="w-full flex-col space-y-4">
    <CustomBreadCrumb
          breadCrumbPage={BreadCrumbPage}
          breadCrumpItems={[{label : "Mock Interviews", link: "/generate"}]}
    />
    </div>
  );
  
};
