import classes from "./Cover.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import NavBar from "./Navbar/Navbar";
import Link from "next/link";

export default function Cover() {
  // Disable server-side rendering for TypeWriterEffect library
  const TypeWriterEffect = dynamic(() => import("react-typewriter-effect"), {
    ssr: false,
  });

  return (
    <div className={classes.Cover}>
      <div className={classes.logos}>
        <Image
          // src={"/Logos/20211107_224308.png"}
          src={"/Logos/20220619_131741-min.webp"}
          alt={"IUB"}
          width={90}
          height={90}
          priority={true}
        />
        <NavBar />
        <Image
          // src={"/Logos/20220619_131741-min.png"}
          src={"/Logos/20211107_224308.webp"}
          alt={"directorate-of-student-affairs"}
          width={90}
          height={90}
          priority={true}
        />
      </div>

      <div className={classes.title}>
        <motion.div
          initial={{ x: -150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut", delay: 0.3 }}
        >
          <h1 className={classes.t1}>IUB </h1>
          <h1 className={classes.t1}>Science Promotion Society.</h1>
        </motion.div>

        <br />
        <br />
        <div style={{ height: "70px" }}>
          <TypeWriterEffect
            textStyle={{
              color: "white",
              fontSize: "1.5em",
              letterSpacing: "1px",
              wordSpacing: "2px",
              fontFamily: "'Sanchez', serif",
              fontWeight: "300",
            }}
            startDelay={2000}
            cursorColor="#3F3D56"
            multiText={[
              "Embrace Scientific Literacy Today...",
              "Promote Science and Create Impact",
              "Join the most accomplished society on your campus...",
            ]}
            multiTextDelay={1000}
            typeSpeed={30}
          />
        </div>
        <Link href={"/articles/"}>
          <button className={classes.article}>Read Our Articles</button>
        </Link>
      </div>
    </div>
  );
}
