import React, { createRef, Component } from 'react'

import ParallaxImage from 'Src/routes/Home/components/ParallaxImage'

import { calculateBackgroundTranslateY } from 'Src/helpers/background-helpers'

import starRow from './assets/star-row.svg'
import flag from './assets/chicago-flag.svg'
import chicago from './assets/chicago.jpg'

const CHICAGO_IMAGE_HEIGHT = 960

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.ticking = false
    this.fromElement = createRef()
    this.state = {
      backgroundTranslateY: 0,
      fromSectionScrollStart: 0,
      chicagoImageOverflow: 0,
      fromSectionHeight: 0,
      innerHeight: 0,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleResize)

    this.handleResize()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.handleResize)
  }

  handleScroll = () => {
    if (!this.ticking) {
      window.requestAnimationFrame(this.animationFrame)
      this.ticking = true
    }
  }

  animationFrame = () => {
    this.ticking = false
    const { scrollY } = window
    const { fromSectionScrollStart, fromSectionHeight, innerHeight, chicagoImageOverflow } = this.state
    const backgroundTranslateY = calculateBackgroundTranslateY({
      fromSectionScrollStart,
      fromSectionHeight,
      innerHeight,
      chicagoImageOverflow,
      scrollY,
    })
    this.setState({
      backgroundTranslateY,
    })
  }

  handleResize = () => {
    const { innerHeight } = window
    const { offsetHeight, offsetTop } = this.fromElement.current
    const fromSectionScrollStart = offsetTop - innerHeight
    const fromSectionHeight = offsetHeight
    const chicagoImageOverflow = CHICAGO_IMAGE_HEIGHT - fromSectionHeight

    this.setState({
      innerHeight,
      fromSectionScrollStart,
      fromSectionHeight,
      chicagoImageOverflow,
    })
  }

  render() {
    const { backgroundTranslateY } = this.state

    return (
      <div className="Home">
        <section className="content-holder hello-holder">
          <section className="content hello">
            <div className="portrait" />
            <h1 className="shadow">
              Hello! I&apos;m <span className="straw">Jack.</span>
            </h1>
          </section>
        </section>
        <section className="content-holder intro-holder">
          <section className="content intro">
            <h2 className="navy">I&apos;m an engineering manager, Javascript developer, and writer.</h2>
            <div className="venn">
              <div className="head" />
              <svg width="300" height="300" viewBox="0 0 300 300">
                <g>
                  <circle cx="90" cy="210" r="90" fill="rgba(79, 124, 172, 1)" />
                  <text x="74" y="217">
                    em
                  </text>
                  <circle cx="210" cy="210" r="90" fill="rgba(230, 175, 46, 1)" />
                  <text x="186" y="217">
                    write
                  </text>
                  <circle cx="150" cy="100" r="90" fill="rgba(244, 91, 105, 1)" />
                  <text x="132" y="107">
                    dev
                  </text>
                  <path d="M150 160 Q 125 60 20 70" stroke="black" strokeWidth="3" fill="transparent" />
                  <path d="M140 159 L 153 171 158 154" stroke="black" strokeWidth="3" fill="transparent" />
                </g>
              </svg>
            </div>
          </section>
        </section>
        <section ref={this.fromElement} className="content-holder from-holder">
          <ParallaxImage src={chicago} translateY={backgroundTranslateY} />
          <section className="content from">
            <h1 className="shadow">(I live in Chicago.)</h1>
          </section>
        </section>
        <section className="content-holder about-holder">
          <section className="content about">
            <p>
              I&apos;m focused on <span className="straw">collaboration</span>, team-building, and purpose-driven
              software development.
            </p>
            <img className="breaker" src={starRow} alt="" />
            <p>
              I&apos;ve learned that a high-functioning <span className="straw">team</span> is more valuable than the
              sum of its parts.
            </p>
            <img className="breaker" src={starRow} alt="" />
            <p>
              I believe that honest <span className="straw">communication</span> in all directions always produces the
              best outcome for everyone involved in a project.{' '}
            </p>
          </section>
        </section>
        <section className="content-holder contact-holder">
          <section className="content contact">
            <h3 className="navy">Want to get in touch?</h3>
            <ul>
              <li>
                <a
                  className="linked-in"
                  href="https://www.linkedin.com/in/jack-lenehan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a className="github" href="https://github.com/jacklenehan" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a className="gmail" href="mailto:jack.lenehan@gmail.com" target="_top">
                  Email
                </a>
              </li>
            </ul>
          </section>
        </section>
        <section className="content-holder colophon-holder">
          <section className="content colophon">
            <p className="gray">&copy; Jack Lenehan {new Date().getFullYear()}</p>
            <p>
              <img src={flag} alt="" />
            </p>
          </section>
        </section>
      </div>
    )
  }
}
