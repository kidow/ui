import type { ComponentType } from 'react'

import AndroidDemo from './android'
import AnimatedBeamDemo from './animated-beam'
import AnimatedCircularProgressBarDemo from './animated-circular-progress-bar'
import AnimatedGradientDemo from './animated-gradient'
import AnimatedGradientTextDemo from './animated-gradient-text'
import AnimatedGridPatternDemo from './animated-grid-pattern'
import AnimatedListDemo from './animated-list'
import AnimatedShinyTextDemo from './animated-shiny-text'
import AnimatedThemeTogglerDemo from './animated-theme-toggler'
import AsciiEffectDemo from './ascii-effect'
import AuroraFlowDemo from './aurora-flow'
import AuroraTextDemo from './aurora-text'
import AuthModalDemo from './auth-modal'
import AvatarCirclesDemo from './avatar-circles'
import BacklightDemo from './backlight'
import BentoGridDemo from './bento-grid'
import BlurFadeDemo from './blur-fade'
import BorderBeamDemo from './border-beam'
import BorderBeamComponentryDemo from './border-beam-componentry'
import CaseStudyFlipStackDemo from './case-study-flip-stack'
import CircuitBoardDemo from './circuit-board'
import ClientTweetCardDemo from './client-tweet-card'
import ClosingPlasmaDemo from './closing-plasma'
import CodeComparisonDemo from './code-comparison'
import CollectionSurferDemo from './collection-surfer'
import ComicTextDemo from './comic-text'
import CommandMenuDemo from './command-menu'
import ConfettiDemo from './confetti'
import CoolModeDemo from './cool-mode'
import CursorDrivenParticleTypographyDemo from './cursor-driven-particle-typography'
import DiaTextRevealDemo from './dia-text-reveal'
import DitherGradientDemo from './dither-gradient'
import DitheredLogoDemo from './dithered-logo'
import DockDemo from './dock'
import DotPatternDemo from './dot-pattern'
import DottedMapDemo from './dotted-map'
import EyeTrackingDemo from './eye-tracking'
import FileTreeDemo from './file-tree'
import FisheyeInfiniteGridDemo from './fisheye-infinite-grid'
import FlickeringGridDemo from './flickering-grid'
import FlightStatusCardDemo from './flight-status-card'
import FlippingWordSwapDemo from './flipping-word-swap'
import GithubCalendarDemo from './github-calendar'
import GlareHoverDemo from './glare-hover'
import GlobeDemo from './globe'
import GlyphMatrixDemo from './glyph-matrix'
import GradientHero01Demo from './gradient-hero-01'
import GridPatternDemo from './grid-pattern'
import HeroVideoDialogDemo from './hero-video-dialog'
import HexagonPatternDemo from './hexagon-pattern'
import HighlighterDemo from './highlighter'
import HoverTransitionDemo from './hover-transition'
import HyperTextDemo from './hyper-text'
import HyperTextComponentryDemo from './hyper-text-componentry'
import IconCloudDemo from './icon-cloud'
import ImageTrailDemo from './image-trail'
import InfiniteImageFieldDemo from './infinite-image-field'
import InteractiveGridPatternDemo from './interactive-grid-pattern'
import InteractiveHoverButtonDemo from './interactive-hover-button'
import InteractiveHoverButtonComponentryDemo from './interactive-hover-button-componentry'
import IphoneDemo from './iphone'
import KineticTextDemo from './kinetic-text'
import KineticTextRevealDemo from './kinetic-text-reveal'
import LayeredStackDemo from './layered-stack'
import LensDemo from './lens'
import LetterCascadeDemo from './letter-cascade'
import LightRaysDemo from './light-rays'
import LineShadowTextDemo from './line-shadow-text'
import LiquidBlobDemo from './liquid-blob'
import LiquidChromeDemo from './liquid-chrome'
import MacKeyboardDemo from './mac-keyboard'
import MagicCardDemo from './magic-card'
import MagnetLinesDemo from './magnet-lines'
import MagneticDockDemo from './magnetic-dock'
import MarqueeDemo from './marquee'
import MatrixRainDemo from './matrix-rain'
import MeteorsDemo from './meteors'
import MorphingTextDemo from './morphing-text'
import MusicPlayerDemo from './music-player'
import NeonGradientCardDemo from './neon-gradient-card'
import NoiseTextureDemo from './noise-texture'
import NoiseTextureComponentryDemo from './noise-texture-componentry'
import NumberTickerDemo from './number-ticker'
import OrbitCardStackDemo from './orbit-card-stack'
import OrbitingCirclesDemo from './orbiting-circles'
import ParticleGalaxyDemo from './particle-galaxy'
import ParticlesDemo from './particles'
import PixelCanvasDemo from './pixel-canvas'
import PixelImageDemo from './pixel-image'
import PixelImageTrailDemo from './pixel-image-trail'
import PointerDemo from './pointer'
import Pricing01Demo from './pricing-01'
import Pricing02Demo from './pricing-02'
import PrismGradientDemo from './prism-gradient'
import ProgressiveBlurDemo from './progressive-blur'
import PulsatingButtonDemo from './pulsating-button'
import PulsatingButtonComponentryDemo from './pulsating-button-componentry'
import RainbowButtonDemo from './rainbow-button'
import RetroGridDemo from './retro-grid'
import RippleDemo from './ripple'
import RippleButtonDemo from './ripple-button'
import RippleTransitionDemo from './ripple-transition'
import SafariDemo from './safari'
import ScrollBasedVelocityDemo from './scroll-based-velocity'
import ScrollBasedVelocityComponentryDemo from './scroll-based-velocity-componentry'
import ScrollChoreographyDemo from './scroll-choreography'
import ScrollProgressDemo from './scroll-progress'
import ScrollSplitCardDemo from './scroll-split-card'
import ScrollTiltedGridDemo from './scroll-tilted-grid'
import ScrubInputDemo from './scrub-input'
import ShimmerButtonDemo from './shimmer-button'
import ShimmerButtonComponentryDemo from './shimmer-button-componentry'
import ShineBorderDemo from './shine-border'
import ShinyButtonDemo from './shiny-button'
import ShowcaseCardDemo from './showcase-card'
import SignatureDemo from './signature'
import SilkAuroraDemo from './silk-aurora'
import SmoothCursorDemo from './smooth-cursor'
import SparklesTextDemo from './sparkles-text'
import SpinningTextDemo from './spinning-text'
import SplitFlapDisplayDemo from './split-flap-display'
import SpotlightCardDemo from './spotlight-card'
import StickyScrollCardsDemo from './sticky-scroll-cards'
import StripedPatternDemo from './striped-pattern'
import TerminalDemo from './terminal'
import TestimonialMarqueeDemo from './testimonial-marquee'
import Text3dFlipDemo from './text-3d-flip'
import TextAnimateDemo from './text-animate'
import TextAnimateComponentryDemo from './text-animate-componentry'
import TextMorphDemo from './text-morph'
import TextRepelDemo from './text-repel'
import TextRevealDemo from './text-reveal'
import TweetCardDemo from './tweet-card'
import TypingAnimationDemo from './typing-animation'
import VideoTextDemo from './video-text'
import WarpBackgroundDemo from './warp-background'
import WebglLiquidDemo from './webgl-liquid'
import WheelCarouselDemo from './wheel-carousel'
import WordRotateDemo from './word-rotate'

/**
 * 사이트 전용 데모. 레지스트리(/r/*.json)에는 포함되지 않는다.
 * 이 파일은 scripts/sync-demos.mjs 가 생성한다 — 직접 고치지 말 것.
 */
export const demos: Record<string, ComponentType> = {
  'android': AndroidDemo,
  'animated-beam': AnimatedBeamDemo,
  'animated-circular-progress-bar': AnimatedCircularProgressBarDemo,
  'animated-gradient': AnimatedGradientDemo,
  'animated-gradient-text': AnimatedGradientTextDemo,
  'animated-grid-pattern': AnimatedGridPatternDemo,
  'animated-list': AnimatedListDemo,
  'animated-shiny-text': AnimatedShinyTextDemo,
  'animated-theme-toggler': AnimatedThemeTogglerDemo,
  'ascii-effect': AsciiEffectDemo,
  'aurora-flow': AuroraFlowDemo,
  'aurora-text': AuroraTextDemo,
  'auth-modal': AuthModalDemo,
  'avatar-circles': AvatarCirclesDemo,
  'backlight': BacklightDemo,
  'bento-grid': BentoGridDemo,
  'blur-fade': BlurFadeDemo,
  'border-beam': BorderBeamDemo,
  'border-beam-componentry': BorderBeamComponentryDemo,
  'case-study-flip-stack': CaseStudyFlipStackDemo,
  'circuit-board': CircuitBoardDemo,
  'client-tweet-card': ClientTweetCardDemo,
  'closing-plasma': ClosingPlasmaDemo,
  'code-comparison': CodeComparisonDemo,
  'collection-surfer': CollectionSurferDemo,
  'comic-text': ComicTextDemo,
  'command-menu': CommandMenuDemo,
  'confetti': ConfettiDemo,
  'cool-mode': CoolModeDemo,
  'cursor-driven-particle-typography': CursorDrivenParticleTypographyDemo,
  'dia-text-reveal': DiaTextRevealDemo,
  'dither-gradient': DitherGradientDemo,
  'dithered-logo': DitheredLogoDemo,
  'dock': DockDemo,
  'dot-pattern': DotPatternDemo,
  'dotted-map': DottedMapDemo,
  'eye-tracking': EyeTrackingDemo,
  'file-tree': FileTreeDemo,
  'fisheye-infinite-grid': FisheyeInfiniteGridDemo,
  'flickering-grid': FlickeringGridDemo,
  'flight-status-card': FlightStatusCardDemo,
  'flipping-word-swap': FlippingWordSwapDemo,
  'github-calendar': GithubCalendarDemo,
  'glare-hover': GlareHoverDemo,
  'globe': GlobeDemo,
  'glyph-matrix': GlyphMatrixDemo,
  'gradient-hero-01': GradientHero01Demo,
  'grid-pattern': GridPatternDemo,
  'hero-video-dialog': HeroVideoDialogDemo,
  'hexagon-pattern': HexagonPatternDemo,
  'highlighter': HighlighterDemo,
  'hover-transition': HoverTransitionDemo,
  'hyper-text': HyperTextDemo,
  'hyper-text-componentry': HyperTextComponentryDemo,
  'icon-cloud': IconCloudDemo,
  'image-trail': ImageTrailDemo,
  'infinite-image-field': InfiniteImageFieldDemo,
  'interactive-grid-pattern': InteractiveGridPatternDemo,
  'interactive-hover-button': InteractiveHoverButtonDemo,
  'interactive-hover-button-componentry': InteractiveHoverButtonComponentryDemo,
  'iphone': IphoneDemo,
  'kinetic-text': KineticTextDemo,
  'kinetic-text-reveal': KineticTextRevealDemo,
  'layered-stack': LayeredStackDemo,
  'lens': LensDemo,
  'letter-cascade': LetterCascadeDemo,
  'light-rays': LightRaysDemo,
  'line-shadow-text': LineShadowTextDemo,
  'liquid-blob': LiquidBlobDemo,
  'liquid-chrome': LiquidChromeDemo,
  'mac-keyboard': MacKeyboardDemo,
  'magic-card': MagicCardDemo,
  'magnet-lines': MagnetLinesDemo,
  'magnetic-dock': MagneticDockDemo,
  'marquee': MarqueeDemo,
  'matrix-rain': MatrixRainDemo,
  'meteors': MeteorsDemo,
  'morphing-text': MorphingTextDemo,
  'music-player': MusicPlayerDemo,
  'neon-gradient-card': NeonGradientCardDemo,
  'noise-texture': NoiseTextureDemo,
  'noise-texture-componentry': NoiseTextureComponentryDemo,
  'number-ticker': NumberTickerDemo,
  'orbit-card-stack': OrbitCardStackDemo,
  'orbiting-circles': OrbitingCirclesDemo,
  'particle-galaxy': ParticleGalaxyDemo,
  'particles': ParticlesDemo,
  'pixel-canvas': PixelCanvasDemo,
  'pixel-image': PixelImageDemo,
  'pixel-image-trail': PixelImageTrailDemo,
  'pointer': PointerDemo,
  'pricing-01': Pricing01Demo,
  'pricing-02': Pricing02Demo,
  'prism-gradient': PrismGradientDemo,
  'progressive-blur': ProgressiveBlurDemo,
  'pulsating-button': PulsatingButtonDemo,
  'pulsating-button-componentry': PulsatingButtonComponentryDemo,
  'rainbow-button': RainbowButtonDemo,
  'retro-grid': RetroGridDemo,
  'ripple': RippleDemo,
  'ripple-button': RippleButtonDemo,
  'ripple-transition': RippleTransitionDemo,
  'safari': SafariDemo,
  'scroll-based-velocity': ScrollBasedVelocityDemo,
  'scroll-based-velocity-componentry': ScrollBasedVelocityComponentryDemo,
  'scroll-choreography': ScrollChoreographyDemo,
  'scroll-progress': ScrollProgressDemo,
  'scroll-split-card': ScrollSplitCardDemo,
  'scroll-tilted-grid': ScrollTiltedGridDemo,
  'scrub-input': ScrubInputDemo,
  'shimmer-button': ShimmerButtonDemo,
  'shimmer-button-componentry': ShimmerButtonComponentryDemo,
  'shine-border': ShineBorderDemo,
  'shiny-button': ShinyButtonDemo,
  'showcase-card': ShowcaseCardDemo,
  'signature': SignatureDemo,
  'silk-aurora': SilkAuroraDemo,
  'smooth-cursor': SmoothCursorDemo,
  'sparkles-text': SparklesTextDemo,
  'spinning-text': SpinningTextDemo,
  'split-flap-display': SplitFlapDisplayDemo,
  'spotlight-card': SpotlightCardDemo,
  'sticky-scroll-cards': StickyScrollCardsDemo,
  'striped-pattern': StripedPatternDemo,
  'terminal': TerminalDemo,
  'testimonial-marquee': TestimonialMarqueeDemo,
  'text-3d-flip': Text3dFlipDemo,
  'text-animate': TextAnimateDemo,
  'text-animate-componentry': TextAnimateComponentryDemo,
  'text-morph': TextMorphDemo,
  'text-repel': TextRepelDemo,
  'text-reveal': TextRevealDemo,
  'tweet-card': TweetCardDemo,
  'typing-animation': TypingAnimationDemo,
  'video-text': VideoTextDemo,
  'warp-background': WarpBackgroundDemo,
  'webgl-liquid': WebglLiquidDemo,
  'wheel-carousel': WheelCarouselDemo,
  'word-rotate': WordRotateDemo,
}
