import React from "react";
import { Link } from "react-router-dom";

import Image from "../components/Image";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* details */}
      <div className="flex gap-8">
        <div className="flex flex-col gap-8 lg:w-3/5">
          <h1 className="text-xl font-semibold md:text-3xl xl:text-4xl 2xl:text-5xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi,
            perspiciatis.
          </h1>
          <div className="text-t4 flex items-center gap-2">
            <span>Written by</span>
            <Link className="text-btn">John Doe</Link>
            <span>on</span>
            <Link className="text-btn">Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-t3 font-medium">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
            veritatis repellat tempore in distinctio dolores possimus eveniet
            asperiores. Molestiae ab quos provident deserunt libero, veritatis
            suscipit in iste labore cum.
          </p>
        </div>
        <div className="hidden w-2/5 lg:block">
          <Image src="postImg.jpeg" w={600} className="rounded-2xl" />
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col gap-12 md:flex-row">
        {/* text */}
        <div className="flex flex-col gap-6 text-justify lg:text-lg">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
            pariatur dolore cupiditate assumenda facilis doloremque atque,
            magnam, reprehenderit doloribus quia recusandae unde fuga quo sed
            quod, hic explicabo. Animi ea culpa reprehenderit repellat minima,
            ipsa ducimus iusto odio vel quasi quibusdam praesentium. Voluptate
            possimus, dolorum ullam ea quod laborum unde, nulla ipsum
            praesentium placeat fugiat adipisci ducimus facilis corporis cumque.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
            aspernatur in, rerum reiciendis et quasi laudantium debitis
            molestias hic sapiente? Fugit ratione, accusantium dolores
            recusandae neque sint eaque voluptas quidem.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
            pariatur dolore cupiditate assumenda facilis doloremque atque,
            magnam, reprehenderit doloribus quia recusandae unde fuga quo sed
            quod, hic explicabo. Animi ea culpa reprehenderit repellat minima,
            ipsa ducimus iusto odio vel quasi quibusdam praesentium. Voluptate
            possimus, dolorum ullam ea quod laborum unde, nulla ipsum
            praesentium placeat fugiat adipisci ducimus facilis corporis cumque.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
            aspernatur in, rerum reiciendis et quasi laudantium debitis
            molestias hic sapiente? Fugit ratione, accusantium dolores
            recusandae neque sint eaque voluptas quidem.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
            pariatur dolore cupiditate assumenda facilis doloremque atque,
            magnam, reprehenderit doloribus quia recusandae unde fuga quo sed
            quod, hic explicabo. Animi ea culpa reprehenderit repellat minima,
            ipsa ducimus iusto odio vel quasi quibusdam praesentium. Voluptate
            possimus, dolorum ullam ea quod laborum unde, nulla ipsum
            praesentium placeat fugiat adipisci ducimus facilis corporis cumque.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
            aspernatur in, rerum reiciendis et quasi laudantium debitis
            molestias hic sapiente? Fugit ratione, accusantium dolores
            recusandae neque sint eaque voluptas quidem.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
            pariatur dolore cupiditate assumenda facilis doloremque atque,
            magnam, reprehenderit doloribus quia recusandae unde fuga quo sed
            quod, hic explicabo. Animi ea culpa reprehenderit repellat minima,
            ipsa ducimus iusto odio vel quasi quibusdam praesentium. Voluptate
            possimus, dolorum ullam ea quod laborum unde, nulla ipsum
            praesentium placeat fugiat adipisci ducimus facilis corporis cumque.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
            aspernatur in, rerum reiciendis et quasi laudantium debitis
            molestias hic sapiente? Fugit ratione, accusantium dolores
            recusandae neque sint eaque voluptas quidem.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
            pariatur dolore cupiditate assumenda facilis doloremque atque,
            magnam, reprehenderit doloribus quia recusandae unde fuga quo sed
            quod, hic explicabo. Animi ea culpa reprehenderit repellat minima,
            ipsa ducimus iusto odio vel quasi quibusdam praesentium. Voluptate
            possimus, dolorum ullam ea quod laborum unde, nulla ipsum
            praesentium placeat fugiat adipisci ducimus facilis corporis cumque.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
            aspernatur in, rerum reiciendis et quasi laudantium debitis
            molestias hic sapiente? Fugit ratione, accusantium dolores
            recusandae neque sint eaque voluptas quidem.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
            aspernatur in, rerum reiciendis et quasi laudantium debitis
            molestias hic sapiente? Fugit ratione, accusantium dolores
            recusandae neque sint eaque voluptas quidem.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
            aspernatur in, rerum reiciendis et quasi laudantium debitis
            molestias hic sapiente? Fugit ratione, accusantium dolores
            recusandae neque sint eaque voluptas quidem.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
            pariatur dolore cupiditate assumenda facilis doloremque atque,
            magnam, reprehenderit doloribus quia recusandae unde fuga quo sed
            quod, hic explicabo. Animi ea culpa reprehenderit repellat minima,
            ipsa ducimus iusto odio vel quasi quibusdam praesentium. Voluptate
            possimus, dolorum ullam ea quod laborum unde, nulla ipsum
            praesentium placeat fugiat adipisci ducimus facilis corporis cumque.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
            aspernatur in, rerum reiciendis et quasi laudantium debitis
            molestias hic sapiente? Fugit ratione, accusantium dolores
            recusandae neque sint eaque voluptas quidem.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
            aspernatur in, rerum reiciendis et quasi laudantium debitis
            molestias hic sapiente? Fugit ratione, accusantium dolores
            recusandae neque sint eaque voluptas quidem.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
            aspernatur in, rerum reiciendis et quasi laudantium debitis
            molestias hic sapiente? Fugit ratione, accusantium dolores
            recusandae neque sint eaque voluptas quidem.
          </p>
        </div>
        {/* menu */}
        <div className="sticky top-8 h-max px-4">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              <Image
                src="userImg.jpeg"
                className="size-12 rounded-full object-cover"
                w={48}
                h={48}
              />
              <Link>John Doe</Link>
            </div>
            <p className="text-t3 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg" />
              </Link>
              <Link>
                <Image src="instagram.svg" />
              </Link>
            </div>
          </div>
          <PostMenuActions />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline" to="/posts?cat=web-design">
              Web Design
            </Link>
            <Link className="underline" to="/posts?cat=email-marketing">
              Email Marketing
            </Link>
            <Link className="underline" to="/posts?cat=video-editing">
              Video Editing
            </Link>
            <Link className="underline" to="/posts?cat=database">
              Database
            </Link>
            <Link className="underline" to="/posts?cat=copywriting">
              Copywriting
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
