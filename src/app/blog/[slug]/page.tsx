import Markdown, { MarkdownToJSX } from 'markdown-to-jsx';
import { Fragment, ReactElement, useState } from 'react';

export type Props = {
  callback?: () => void;
  paramKey?: string;
};

type BlogState = {
  blog: string | null;
};

const Blog = ({
  allBlogs,
}: Props): ReactElement | null => {
  const [blog, setBlog] = useState<BlogState>({
    blog: null,
  });

  /**
   * Fetch blog from static files based by id.
   */
  const currentBlogIndex = allBlogs?.findIndex((b) => b.id === currentBlogId) || 0;

  const currentBlog =
    individualBlog || (allBlogs && (currentBlogIndex >= 0 ? allBlogs[currentBlogIndex] : null));

  /**
   * Dynamically import blogs based on the current blog URL.
   */
  //   useEffect(() => {
  //     if (!currentBlog) {
  //       if (callback) {
  //         return callback();
  //       }
  //       return;
  //     }

  //     const { file } = currentBlog;

  //     const fileLink = new URL(file, import.meta.url);

  //     fetch(fileLink)
  //       .then((res) => {
  //         return res.text();
  //       })
  //       .then((res) => {
  //         if (allBlogs && !individualBlog) {
  //           const blogWithProcessedImageLinks = processImageLinks({
  //             blog: res,
  //             imagePath: currentBlog.imagePath,
  //           });

  //           const blogWithProcessedLinks = processLinks({
  //             allBlogs,
  //             blog: blogWithProcessedImageLinks,
  //             paramKey,
  //           });

  //           const { blog, frontMatter } = processBlog({
  //             metadata: currentBlog.metadata,
  //             blog: blogWithProcessedLinks,
  //             delimiter: currentBlog.frontMatter?.delimiter,
  //             showFrontMatter: currentBlog.frontMatter?.showFrontMatter,
  //           });

  //           return setBlog({
  //             blog,
  //             frontMatter,
  //           });
  //         }

  //         const { blog, frontMatter } = processBlog({
  //           metadata: currentBlog.metadata,
  //           blog: res,
  //           delimiter: currentBlog.frontMatter?.delimiter,
  //           showFrontMatter: currentBlog.frontMatter?.showFrontMatter,
  //         });

  //         setBlog({
  //           blog,
  //           frontMatter,
  //         });
  //       })
  //       .catch(() => {});
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [currentBlogIndex, currentBlog]);

  if (!blog.blog) return null;

  const FrontMatterOverrideComponent = defTheme?.overrides?.frontmatter?.component;

  return (
    <article>
      <h1 className={getClassName({ tag: 'h1' }) || styles.h1}>{currentBlog?.title}</h1>
      <div
        {...(currentBlog?.frontMatter?.position === 'end'
          ? { style: { display: 'flex', flexDirection: 'column-reverse' } }
          : {})}
      >
        {blog.frontMatter && FrontMatterOverrideComponent ? (
          <FrontMatterOverrideComponent
            frontmatter={blog.frontMatter}
            // TODO fix this so we can ensure users can override colours.
            // className={getClassName({ tag: 'frontmatter' }) || styles.metadata}
            {...defTheme?.overrides?.frontmatter?.props}
          />
        ) : (
          <FrontMatter frontmatter={blog.frontMatter} />
        )}
        <section>
          <Markdown
            options={{
              wrapper: Fragment,
              overrides: {
                ...defTheme?.overrides,
                h1: defTheme?.overrides?.h1 || {
                  component: AnchorWrapper,
                  props: { className: getClassName({ tag: 'h1' }), level: 1 },
                },
                h2: defTheme?.overrides?.h2 || {
                  component: AnchorWrapper,
                  props: { className: getClassName({ tag: 'h2' }), level: 2 },
                },
                h3: defTheme?.overrides?.h3 || {
                  component: AnchorWrapper,
                  props: { className: getClassName({ tag: 'h3' }), level: 3 },
                },
                h4: defTheme?.overrides?.h4 || {
                  component: AnchorWrapper,
                  props: { className: getClassName({ tag: 'h4' }), level: 4 },
                },
                h5: defTheme?.overrides?.h5 || {
                  component: AnchorWrapper,
                  props: { level: 5 },
                },
                h6: defTheme?.overrides?.h6 || {
                  component: AnchorWrapper,
                  props: { level: 6 },
                },
                p: defTheme?.overrides?.p || { props: { className: getClassName({ tag: 'p' }) } },
                ul: defTheme?.overrides?.ul || {
                  component: UnorderedListComponent,
                  props: { className: getClassName({ tag: 'ul' }) },
                },
                li: defTheme?.overrides?.li || {
                  component: ListComponent,
                  props: { className: getClassName({ tag: 'li' }) },
                },
                code: {
                  component: CodeComponent,
                  props: { theme: defTheme },
                },
                a: defTheme?.overrides?.a || {
                  props: { className: getClassName({ tag: 'a' }) },
                },
                ol: defTheme?.overrides?.ol || {
                  props: { className: getClassName({ tag: 'ol' }) },
                },
                strong: defTheme?.overrides?.strong || {
                  props: { className: getClassName({ tag: 'strong' }) },
                },
                em: defTheme?.overrides?.em || {
                  props: { className: getClassName({ tag: 'em' }) },
                },
                blockquote: defTheme?.overrides?.blockquote || {
                  props: { className: getClassName({ tag: 'blockquote' }) },
                },
              } as MarkdownToJSX.Overrides,
            }}
          >
            {blog.blog}
          </Markdown>
        </section>
      </div>
    </article>
  );
};

export default Blog;
