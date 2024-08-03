"use client";

import Link from "next/link";
import React from "react";
import styles from "@/layout/Header.module.css";
import { TiHomeOutline } from "react-icons/ti";
import { LuTrophy } from "react-icons/lu";
import { GoVerified } from "react-icons/go";
import { CiStar } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { CiSquarePlus } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { IoCompassOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div>
        <ul>
          <span>Menu</span>
          <li className={pathname === "/" ? styles.active : null}>
            <TiHomeOutline className={styles.icon} />
            <Link href="/">Home</Link>
          </li>
          <li
            className={pathname?.includes("/discover") ? styles.active : null}
          >
            <IoCompassOutline className={styles.icon} />
            <Link href="/discover">Discover</Link>
          </li>
          <li className={pathname === "/awards" ? styles.active : null}>
            <LuTrophy className={styles.icon} />
            <Link href="/">Awards</Link>
          </li>
          <li className={pathname === "/celebrities" ? styles.active : null}>
            <GoVerified className={styles.icon} />
            <Link href="/celebrities">Celebrities</Link>
          </li>
        </ul>
        <ul>
          <span>Libary</span>
          <li>
            <CiStar className={styles.icon} />
            <Link href="/">Top Rated</Link>
          </li>
          <li>
            <IoIosHeartEmpty className={styles.icon} />
            <Link href="/">Playlist</Link>
          </li>
          <li>
            <CiSquarePlus className={styles.icon} />
            <Link href="/">Watch List</Link>
          </li>
        </ul>
        <ul>
          <span>General</span>
          <li>
            <IoSettingsOutline className={styles.icon} />
            <Link href="/">Settings</Link>
          </li>
          <li>
            <TbLogout className={styles.icon} />
            <button>Sign Out</button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
