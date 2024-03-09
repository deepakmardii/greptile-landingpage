import React from "react";

const Testimonial = () => {
  return (
    <section className="bg-black text-white font-mono">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid items-center gap-4 xl:grid-cols-5">
          <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
            <h2 className="text-5xl font-bold text-emerald-500">
              Testimonials
            </h2>
            <p className="text-sm lg:text-base dark:text-gray-400">
              Discover what our satisfied customers have to say by reading their
              trusted reviews, providing genuine insights into their experiences
              with our products/services.
            </p>
          </div>
          <div className="p-6 xl:col-span-3 text-sm">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid content-center gap-4">
                <div className="p-6 rounded shadow-md bg-neutral-900">
                  <p className="text-sm lg:text-base">
                    Pretty darn impressed with Greptile so far. Loaded up a
                    Github repo, and asked questions about a repo, received
                    quick, intelligent answers in plain English. It was even
                    able to create a Mermaid diagram to help me visualize the
                    code. sibus reprehendunt.
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img
                      src="https://source.unsplash.com/50x50/?portrait?27"
                      alt=""
                      className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-neutral-900"
                    />
                    <div>
                      <p className="text-lg font-bold">Sebastian Gallese</p>
                      <p className="text-sm dark:text-gray-400">
                        Senior Engineer, Included Health
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded shadow-md bg-neutral-900">
                  <p className="text-sm lg:text-base">
                    The team is kick ass. If you use GPT while writing code, you
                    should try Greptile. It's much more tailored to that use
                    case than regular GPT. I've used the product to write tests
                    and to debug how our code interacts with other repos.
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img
                      src="https://source.unsplash.com/50x50/?portrait?2"
                      alt=""
                      className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-neutral-900"
                    />
                    <div>
                      <p className="text-lg font-bold">Jack Chapman</p>
                      <p className="text-sm dark:text-gray-400">
                        Cardinal Gray, ex-Citadel
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid content-center gap-4">
                <div className="p-6 rounded shadow-md bg-neutral-900">
                  <p className="text-sm lg:text-base">
                    Greptile is 100x better than ChatGPT and 10x better than
                    Cursor at answering questions about the entire codebase. I
                    have no idea how they do it.
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img
                      src="https://source.unsplash.com/50x50/?portrait?3"
                      alt=""
                      className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-neutral-900"
                    />
                    <div>
                      <p className="text-lg font-bold">Rahul Behal</p>
                      <p className="text-sm dark:text-gray-400">
                        CTO, AgentHub, ex-Amazon
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded shadow-md bg-neutral-900">
                  <p className="text-sm lg:text-base">
                    I am extremely impressed and honestly quite surprised. I
                    have GPT4, the new Gemini Advanced, and Greptile in 3
                    different tabs (I'm also using Copilot both in Bing and
                    GitHub Copilot chat in vsCode, but they're pretty terrible).
                    I'm writing my prompt and pasting it into all 3 AIs. ALL but
                    ONE time, Greptile has given me BY FAR the best responses.
                    The code is often complete without me begging. The context
                    is far better since it has access to my repo. The additional
                    supporting articles and resources offered along the response
                    were really helpful.
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img
                      src="https://source.unsplash.com/50x50/?portrait?4"
                      alt=""
                      className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-neutral-900"
                    />
                    <div>
                      <p className="text-lg font-bold">Paul Suarez</p>
                      <p className="text-sm dark:text-gray-400">
                        Senior Software Engineer, Liberty Mutual
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
