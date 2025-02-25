// @ts-check

/**
  Chapter layout: uses wrappers for chapters.
*/

import kitten from '@small-web/kitten'
import Book, { chapters } from './Book.layout.js'

const isNumberedChapter = index => index >= 2 && index <= 8

export default function Chapter ({ SLOT, index }) {
  const i = Number(index)
  const chapter = chapters[i]
  const previousChapterIndex = i-1
  const previousChapter = chapters[previousChapterIndex]
  const nextChapterIndex = i === chapters.length - 1 ? 0 : i+1
  const nextChapter = chapters[nextChapterIndex]
  const chapterNumber = i - 1

  return kitten.html`
    <${Book}>
      <div class='outer-wrap chapter-opener'>
        <div class='inner-wrap chapter-header'>
          <if ${isNumberedChapter(i)}>
            <div class='chapter-num'>${chapterNumber}</div>
          </if>
          <h1 class='chapter-title'>${chapter.title}</h1>
        </div>
      </div>
      <div class='outer-wrap'>
        <div class='inner-wrap book-body'>

          ${SLOT}

          <nav class='inner-nav repel'>
            <span>
              <a href='${previousChapter.link}' class='chap-prev'>
                <svg aria-hidden='true' viewBox='0 0 27 65' width='27' height='65' xmlns='http://www.w3.org/2000/svg'><path d='M5.274 5.452 22 33 5.274 5.452ZM22 33 5 60l17-27Z' stroke='currentColor' stroke-width='9' fill='none' fill-rule='evenodd' stroke-linecap='round' stroke-linejoin='round'></path></svg>
                ${isNumberedChapter(previousChapterIndex) ? `${previousChapterIndex - 1}. ` : ''}${previousChapter.title}
              </a>
            </span>

            <span>
              <a href='${nextChapter.link}' class='chap-next'>
              ${isNumberedChapter(nextChapterIndex) ? `${nextChapterIndex - 1}. ` : ''}${nextChapter.title}
              <svg aria-hidden='true' viewBox='0 0 27 65' width='27' height='65' xmlns='http://www.w3.org/2000/svg'><path d='M5.274 5.452 22 33 5.274 5.452ZM22 33 5 60l17-27Z' stroke='currentColor' stroke-width='9' fill='none' fill-rule='evenodd' stroke-linecap='round' stroke-linejoin='round'></path></svg>
              </a>
            </span>
          </nav>
        </div>
      </div>
    </>
  `
}
