const fs = require('fs');
const path = require('path');
const repoRoot = path.resolve(__dirname, '..');
const files = {
  'src/components/home/AboutPreview/AboutPreview.jsx': [
    {
      re: /<Image\s+\n\s*src=\{profile\.image \|\| "\/images\/profile\.jpg"\}/m,
      replace: '<Image\n                                    src={getAssetUrl(profile.image || "/images/profile.jpg")}'
    }
  ],
  'src/components/home/FeaturedWork/FeaturedWork.jsx': [
    {
      re: /image:\s*p\.image \|\| '\/images\/placeholder\.jpg'/,
      replace: 'image: getAssetUrl(p.image || \'/images/placeholder.jpg\')'
    }
  ],
  'src/components/work/ADTCaseStudy.jsx': [
    {
      re: /import styles from "\.\/ADTCaseStudy\.module\.css";/,
      replace: 'import { getAssetUrl } from "../../../lib/assetUrl";\nimport styles from "./ADTCaseStudy.module.css";'
    },
    { re: /<img src="(\/images\/ADT\/Home\.jpg)" alt="ADT Solution Landing Page" \/>/,
      replace: '<img src={getAssetUrl("$1")} alt="ADT Solution Landing Page" />' },
    { re: /<img src="(\/images\/ADT\/About us\.jpg)" alt="Content Re-write" \/>/,
      replace: '<img src={getAssetUrl("$1")} alt="Content Re-write" />' },
    { re: /<img src="(\/images\/ADT\/Payroll\.jpg)" alt="ADT Global Payroll UI" \/>/,
      replace: '<img src={getAssetUrl("$1")} alt="ADT Global Payroll UI" />' },
    { re: /<img src="(\/images\/ADT\/EOR\.jpg)" alt="ADT Employer of Record UI" \/>/,
      replace: '<img src={getAssetUrl("$1")} alt="ADT Employer of Record UI" />' },
    { re: /<img src="(\/images\/ADT\/Immigration\.jpg)" alt="ADT Immigration Flow" \/>/,
      replace: '<img src={getAssetUrl("$1")} alt="ADT Immigration Flow" />' },
    { re: /<img src="(\/images\/ADT\/Pricing\.jpg)" alt="ADT Pricing Tables Redesigned" \/>/,
      replace: '<img src={getAssetUrl("$1")} alt="ADT Pricing Tables Redesigned" />' }
  ],
  'src/components/work/BhaiyaaCaseStudy.jsx': [
    {
      re: /import styles from "\.\/BhaiyaaCaseStudy\.module\.css";/,
      replace: 'import { getAssetUrl } from "../../../lib/assetUrl";\nimport styles from "./BhaiyaaCaseStudy.module.css";'
    },
    { re: /<img src="(\/images\/bhaiyaa\/new_screen_3\.jpg)" alt="Bhaiyaa Mart Screen" \/>/,
      replace: '<img src={getAssetUrl("$1")} alt="Bhaiyaa Mart Screen" />' },
    { re: /<img src="(\/images\/bhaiyaa\/new_screen_1\.jpg)" alt="Bhaiyaa Home Screen" \/>/,
      replace: '<img src={getAssetUrl("$1")} alt="Bhaiyaa Home Screen" />' }
  ],
  'src/components/work/CampusBitesCaseStudy.jsx': [
    {
      re: /import styles from "\.\/CampusBitesCaseStudy\.module\.css";/,
      replace: 'import { getAssetUrl } from "../../../lib/assetUrl";\nimport styles from "./CampusBitesCaseStudy.module.css";'
    },
    { re: /<img src=\{current\.src\} alt=\{current\.label\} \/>/,
      replace: '<img src={getAssetUrl(current.src)} alt={current.label} />' },
    { re: /<img src="(\/images\/campusbites\/Admin Dashboard\.png)" alt="Admin Dashboard" \/>/,
      replace: '<img src={getAssetUrl("$1")} alt="Admin Dashboard" />' },
    { re: /<img src="(\/images\/campusbites\/Store Dashboard\.png)" alt="Store Dashboard" \/>/,
      replace: '<img src={getAssetUrl("$1")} alt="Store Dashboard" />' },
    { re: /<img src="(\/images\/campusbites\/Food cout listing \.png)" alt="Mobile App" \/>/,
      replace: '<img src={getAssetUrl("$1")} alt="Mobile App" />' }
  ],
  'src/components/work/MyrikCaseStudy.jsx': [
    {
      re: /import styles from "\.\/MyrikCaseStudy\.module\.css";/,
      replace: 'import { getAssetUrl } from "../../../lib/assetUrl";\nimport styles from "./MyrikCaseStudy.module.css";'
    },
    {
      re: /<img src="(\/images\/myrik\/screens\/[^"]+)" alt="([^"]*)" \/>/g,
      replace: '<img src={getAssetUrl("$1")} alt="$2" />'
    }
  ],
  'src/components/work/WorqCaseStudy.jsx': [
    {
      re: /import styles from "\.\/WorqCaseStudy\.module\.css";/,
      replace: 'import { getAssetUrl } from "../../../lib/assetUrl";\nimport styles from "./WorqCaseStudy.module.css";'
    },
    {
      re: /const PhoneMockup = \(\{ src, alt \} \) => \(\s*<div className=\{styles\.phoneMockup\}>\s*<img src=\{src\} alt=\{alt\} \/>\s*<\/div>\s*\);/s,
      replace: 'const PhoneMockup = ({ src, alt }) => (\n    <div className={styles.phoneMockup}>\n        <img src={getAssetUrl(src)} alt={alt} />\n    </div>\n);'
    }
  ]
};

Object.entries(files).forEach(([relativePath, replacements]) => {
  const filePath = path.join(repoRoot, relativePath);
  if (!fs.existsSync(filePath)) {
    console.error('MISSING', relativePath);
    return;
  }
  let content = fs.readFileSync(filePath, 'utf8');
  replacements.forEach(({ re, replace }) => {
    if (!re.test(content)) {
      console.warn('SKIP no match', relativePath, re);
      return;
    }
    content = content.replace(re, replace);
  });
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('patched', relativePath);
});
