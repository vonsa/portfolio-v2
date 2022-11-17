import { ButtonResponsive } from "../UI/ButtonResponsive";
import { analyticsEvent } from "../../services/analytics/analytics.service";

export interface SlideTextInterface {
  tags: string[];
  title: string;
  description: string;
  website?: string;
  github?: string;
  color?: string;
}

/*
    Hacked the CSS for this component because resizing in height glitches Swiper
    Height is now absolute, based on the highest slide
*/

const SlideText = ({
  slides,
  currentSlideIndex,
}: {
  slides: SlideTextInterface[];
  currentSlideIndex: number;
}) => {
  return (
    <div className="flex">
      {slides.map((slide, index) => {
        return (
          <div
            key={JSON.stringify(slide)}
            className={
              index === currentSlideIndex
                ? "min-w-full -order-1"
                : "invisible min-w-full"
            }
          >
            <div className="flex justify-center relative">
              <div className="text-center w-full max-w-md">
                <h3 className="text-2xl font-bold">{slide.title}</h3>
                <ul className="mb-4">{slide.tags.join(" | ")}</ul>
                <p className="text-gray-400 mb-4">{slide.description}</p>
                <div className="flex justify-center flex-wrap gap-2">
                  {slide.website && (
                    <a href={slide.website} target="_blank" rel="noreferrer">
                      <ButtonResponsive
                        onClick={() =>
                          analyticsEvent({
                            name: "Click slide website button",
                            props: { url: slide.website },
                          })
                        }
                      >
                        Website
                      </ButtonResponsive>
                    </a>
                  )}
                  {slide.github && (
                    <a href={slide.github} target="_blank" rel="noreferrer">
                      <ButtonResponsive
                        onClick={() =>
                          analyticsEvent({
                            name: "Click slide GitHub button",
                            props: { url: slide.github },
                          })
                        }
                      >
                        GitHub
                      </ButtonResponsive>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SlideText;
