import { cTB, c, cB, cM, cE } from '../../../_utils/cssr'
import fadeInScaleUpTransition from '../../../_styles/transitions/fade-in-scale-up'
import { depx, pxfy } from '../../../_utils/css'

export default c([
  ({ props }) => {
    const {
      railColor,
      railColorHover,
      railFillColor,
      railFillColorHover,
      handleColor,
      handleBoxShadow,
      handleBoxShadowHover,
      handleBoxShadowActive,
      handleBoxShadowFocus,
      indicatorColor,
      indicatorBoxShadow,
      indicatorTextColor,
      dotBoxShadow,
      dotBoxShadowActive,
      railHeight,
      handleSize,
      dotSize,
      indicatorBorderRadius
    } = props.$local
    const {
      cubicBezierEaseInOut,
      transformDebounceScale
    } = props.$base
    return [
      cTB('slider', {
        raw: `
          display: block;
          padding: 5px 0;
          position: relative;
          z-index: 0;
          width: calc(100% - 14px);
          margin-left: 7px;
          margin-right: 7px;
          cursor: pointer;
        `
      }, [
        cB('slider-marks', {
          raw: `
            position: absolute;
            top: 14px;
            left: 0;
            right: 0;
          `
        }, [
          cB('slider-mark', {
            raw: `
              position: absolute;
              transform: translateX(-50%);
            `
          })
        ]),
        cM('with-mark', {
          raw: `
            width: calc(100% - 24px);
            margin: 8px 12px 32px 12px;
          `
        }),
        c('&:hover', [
          cB('slider-rail', {
            backgroundColor: railColorHover
          }, [
            cE('fill', {
              backgroundColor: railFillColorHover
            }),
            cB('slider-dots', [
              cB('slider-dot', {
                boxShadow: dotBoxShadowActive
              })
            ])
          ]),
          cB('slider-handle', {
            boxShadow: handleBoxShadowHover
          })
        ]),
        cM('active', [
          cB('slider-rail', {
            backgroundColor: railColorHover
          }, [
            cE('fill', {
              backgroundColor: railFillColorHover
            }),
            cB('slider-dots', [
              cB('slider-dot', {
                boxShadow: dotBoxShadowActive
              })
            ])
          ]),
          cB('slider-handle', {
            boxShadow: handleBoxShadowHover
          })
        ]),
        cB('slider-rail', {
          width: '100%',
          position: 'relative',
          height: railHeight,
          backgroundColor: railColor,
          transition: `background-color .3s ${cubicBezierEaseInOut}`,
          borderRadius: pxfy(depx(railHeight) / 2)
        }, [
          cE('fill', {
            raw: `
              position: absolute;
              top: 0;
              bottom: 0;
              border-radius: ${pxfy(depx(railHeight) / 2)};
              transition: background-color .3s ${cubicBezierEaseInOut};
            `,
            backgroundColor: railFillColor
          })
        ]),
        cB('slider-handle', {
          raw: `
            outline: none;
            height: ${handleSize};
            width: ${handleSize};
            border-radius: 50%;
            transition: box-shadow .2s ${cubicBezierEaseInOut}, background-color .3s ${cubicBezierEaseInOut};
            position: absolute;
            top: 0;
            transform: translateX(-50%);
            overflow: hidden;
            cursor: pointer;
          `,
          backgroundColor: handleColor,
          boxShadow: handleBoxShadow
        }, [
          c('&:hover', {
            boxShadow: handleBoxShadowHover
          }),
          c('&:hover:focus', {
            boxShadow: handleBoxShadowActive
          }),
          c('&:focus', {
            boxShadow: handleBoxShadowFocus
          })
        ]),
        cB('slider-dots', {
          raw: `
            position: absolute;
            left: 0;
            top: 50%;
            right: 0;
          `
        }, [
          cB('slider-dot', {
            raw: `
              transition: box-shadow .3s ${cubicBezierEaseInOut}, background-color .3s ${cubicBezierEaseInOut};
              position: absolute;
              transform: translateX(-50%) translateY(-50%);
              height: ${dotSize};
              width: ${dotSize};
              border-radius: 50%;
              overflow: hidden;
            `,
            color: handleColor,
            boxShadow: dotBoxShadow
          })
        ])
      ]),
      cTB('slider-handle-indicator', {
        raw: `
          transform: ${transformDebounceScale};
          font-size: 14px;
          padding: 8px 12px;
          margin-bottom: 12px;
        `,
        borderRadius: indicatorBorderRadius,
        color: indicatorTextColor,
        backgroundColor: indicatorColor,
        boxShadow: indicatorBoxShadow
      }, [
        fadeInScaleUpTransition()
      ])
    ]
  }
])
