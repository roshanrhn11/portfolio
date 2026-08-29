"use client";

import SlideUp from "@/components/animations/SlideUp";


const skills = [
  "Next.js",
  "React.js",
  "Node.js",
  "Laravel",
  "TypeScript",
  "MySQL",
  "PostgreSQL",
  "AWS",
  "Azure",
  "Docker",
];


export default function About() {

  return (

    <section
      id="about"
      className="
      py-24
      px-6
      bg-background
      "
    >

      <SlideUp>

        <div className="
          max-w-6xl
          mx-auto
        ">


          <div className="text-center mb-16">

            <p className="
              text-sm
              uppercase
              tracking-[4px]
              text-muted-foreground
            ">
              About Me
            </p>


            <h2 className="
              mt-4
              text-4xl
              md:text-5xl
              font-bold
              text-foreground
            ">
              Building Digital Experiences
            </h2>

          </div>




          <div className="
            grid
            md:grid-cols-2
            gap-12
            items-center
          ">



            <div>

              <p className="
                text-lg
                leading-relaxed
                text-muted-foreground
              ">

                I am a Software Engineering undergraduate
                passionate about building modern web
                applications and solving real-world problems
                through technology.

                <br />
                <br />

                I specialize in full-stack development,
                creating scalable frontend experiences and
                powerful backend systems using modern
                technologies.

              </p>


            </div>





            <div className="
              grid
              grid-cols-2
              gap-4
            ">


              {skills.map((skill) => (

                <div
                  key={skill}
                  className="
                  border
                  border-border
                  rounded-xl
                  p-4
                  text-center
                  text-foreground
                  hover:bg-accent
                  transition
                  "
                >

                  {skill}

                </div>

              ))}


            </div>


          </div>


        </div>


      </SlideUp>


    </section>

  );
}