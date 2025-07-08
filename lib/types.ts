import { links } from './data';
import { StaticImageData } from 'next/image';

export type SectionName = (typeof links)[number]["name"];

export type SkillIcon = string | StaticImageData;