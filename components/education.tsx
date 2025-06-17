/* eslint-disable react/no-unescaped-entities */
'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import Image from 'next/image';

export default function Education() {
  const { ref } = useSectionInView('Education');

  return (
    <motion.section
      id="education"
      ref={ref}
      className="mb-20 sm:mb-28 scroll-mt-28 w-full md:w-[700px]"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>My Education</SectionHeading>

      <div className="mt-4 flex gap-6 border border-black/5 rounded-lg pt-4 pb-7 px-5 md:p-10 bg-gray-100 dark:bg-white/10">
        <div>
          <Image
            src="https://www.iut-littoral.fr/wp-content/uploads/2021/12/iutlittoral-logo.jpg"
            alt="Logo IUT calais"
            width={300}
            height={0}
          />
        </div>

        <div>
          <p className="text-lg font-medium">Bachelor's Degree in Technology</p>
          <p>Calais University Institute of Technology</p>
          <p className="">Graduated in 2025</p>
          <p className="mt-1 text-sm text-gray-500">
            Specialization:
            <br />
            Application development - design, development, validation
          </p>
        </div>
      </div>

      <div className="mt-4 flex gap-6 border border-black/5 rounded-lg pt-4 pb-7 px-5 md:p-10 bg-gray-100 dark:bg-white/10">
        <div>
          <Image
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.univ-reims.fr%2Fminisite_183%2Fmedia-images%2F23045%2Flogo-universite-de-lille.jpg&f=1&nofb=1&ipt=b12113603bad50674385f130c5ae46e4723582d5731e93583b23e7039923d1f9&ipo=images"
            alt="Logo IUT calais"
            width={300}
            height={0}
          />
        </div>

        <div>
          <p className="text-lg font-medium">Bachelor's Degree in Mathematic</p>
          <p>Lille Science Campus</p>
          <p className="mt-1">Graduated 2022</p>
        </div>
      </div>

      <div className="mt-4 flex gap-6 border border-black/5 rounded-lg pt-4 pb-7 px-5 md:p-10 bg-gray-100 dark:bg-white/10">
        <div>
          <Image
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fphrnleng.rosselcdn.net%2Fsites%2Fdefault%2Ffiles%2Fdpistyles_v2%2Fena_16_9_extra_big%2F2020%2F09%2F04%2Fnode_93896%2F3034009%2Fpublic%2F2020%2F09%2F04%2FB9724486608Z.1_20200904194957_000%252BGVBGJU83C.1-0.jpg%3Fitok%3DxYDkRN4B1599241805&f=1&nofb=1&ipt=b89297205c568b182e33ce2118bd2ce88f776b0b53f483e45cf84323717c4a76&ipo=images"
            alt="Logo IUT calais"
            width={300}
            height={0}
          />
        </div>

        <div>
          <p className="text-lg font-medium">Scientific High School Diploma</p>
          <p>Edouard Branly High School</p>
          <p className="my-1">with a Mathematics Major</p>
          <p className="mt-1 text-sm">Graduated in 2018</p>
        </div>
      </div>
    </motion.section>
  );
}
