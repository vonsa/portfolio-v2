import Slider, {
  SlideInterface,
} from "../../src/features/portfolio/components/PortfolioSlider/PortfolioSlider";
import { slides } from "../../src/features/portfolio/config/slides.config";

beforeEach(() => {
  cy.mount(<Slider slides={slides}></Slider>);
});

describe("Slider.cy.ts", () => {
  it("config should have atleast 3 slides", () => {
    expect(slides.length).to.be.greaterThan(2);
  });
  it("should swipe all slides", () => {
    slideAllRight();
  });
  it("should swipe right and left", () => {
    slideAllRight();
    slideAllLeft();
  });
  it("should preload 2 images, and lazyload the rest", () => {
    cy.get(`[src="${slides[2].img}"]`).should("not.exist");
    slideAllRight((slide, index) => {
      if (index === 1) {
        cy.get(`[src="${slides[2].img}"]`);
      }
    });
  });
});

function slideAllRight(cb = (slide: SlideInterface, i: number) => {}) {
  for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
    cb(slide, i);
    if (i < slides.length - 1) {
      cy.get(`[src="${slide.img}"]`).realSwipe("toLeft", { length: 500 });
    }
  }
}

function slideAllLeft(cb = (slide: SlideInterface, i: number) => {}) {
  for (let i = slides.length - 1; i > 0; i--) {
    const slide = slides[i];
    cb(slide, i);
    if (i > 0) {
      cy.get(`[src="${slide.img}"]`).realSwipe("toRight", { length: 500 });
    }
  }
}
