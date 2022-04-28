import React from "react";
import DocPaginator from "@theme-original/DocPaginator";
import useFrontMatter from "@theme/useFrontMatter";
import { useColorMode } from "@docusaurus/theme-common";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Giscus from "@giscus/react";

function getComments(){
  try {
    let { comments } = useFrontMatter();
    return comments;
  } catch (error) {
    let comments = false;
    return comments
  }
}

export default function DocPaginatorWrapper(props) {
  const { colorMode } = useColorMode();
  const comments = getComments();
  const { i18n } = useDocusaurusContext();
  return (
    <>
      <DocPaginator {...props} />
      {comments && (
        <div className="docusaurus-mt-lg">
          <Giscus
            id="comments"
            repo="IceWhaleTech/ZimaDocs"
            repoId="R_kgDOGcaYdg"
            category="ZimaDocs Comments"
            categoryId="DIC_kwDOGcaYds4CO0nU"
            mapping="pathname"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            theme={ colorMode }
            lang={ i18n.currentLocale }
            loading="lazy"
          />
        </div>
      )}
    </>
  );
}
