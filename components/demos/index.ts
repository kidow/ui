import type { ComponentType } from 'react'

import AndroidDemo from './android'
import AnimatedBeamDemo from './animated-beam'
import AnimatedCircularProgressBarDemo from './animated-circular-progress-bar'
import AnimatedGradientTextDemo from './animated-gradient-text'
import AnimatedGridPatternDemo from './animated-grid-pattern'
import AnimatedListDemo from './animated-list'
import AnimatedShinyTextDemo from './animated-shiny-text'
import AnimatedThemeTogglerDemo from './animated-theme-toggler'
import AuroraTextDemo from './aurora-text'
import AvatarCirclesDemo from './avatar-circles'
import BlurFadeDemo from './blur-fade'
import BorderBeamDemo from './border-beam'
import CodeComparisonDemo from './code-comparison'
import ComicTextDemo from './comic-text'
import ConfettiDemo from './confetti'
import CoolModeDemo from './cool-mode'
import DiaTextRevealDemo from './dia-text-reveal'
import DockDemo from './dock'
import DotPatternDemo from './dot-pattern'
import DottedMapDemo from './dotted-map'
import FileTreeDemo from './file-tree'
import FlickeringGridDemo from './flickering-grid'
import GlareHoverDemo from './glare-hover'
import GlobeDemo from './globe'
import GlyphMatrixDemo from './glyph-matrix'
import GridPatternDemo from './grid-pattern'
import HeroVideoDialogDemo from './hero-video-dialog'
import HexagonPatternDemo from './hexagon-pattern'
import HighlighterDemo from './highlighter'
import HyperTextDemo from './hyper-text'
import IconCloudDemo from './icon-cloud'
import InteractiveGridPatternDemo from './interactive-grid-pattern'
import InteractiveHoverButtonDemo from './interactive-hover-button'
import IphoneDemo from './iphone'
import KineticTextDemo from './kinetic-text'
import LensDemo from './lens'
import LightRaysDemo from './light-rays'
import LineShadowTextDemo from './line-shadow-text'
import MagicCardDemo from './magic-card'
import MarqueeDemo from './marquee'
import MeteorsDemo from './meteors'
import MorphingTextDemo from './morphing-text'
import NeonGradientCardDemo from './neon-gradient-card'
import NoiseTextureDemo from './noise-texture'
import NumberTickerDemo from './number-ticker'
import OrbitingCirclesDemo from './orbiting-circles'
import ParticlesDemo from './particles'
import PixelImageDemo from './pixel-image'
import PointerDemo from './pointer'
import ProgressiveBlurDemo from './progressive-blur'
import PulsatingButtonDemo from './pulsating-button'
import RainbowButtonDemo from './rainbow-button'
import RetroGridDemo from './retro-grid'
import RippleDemo from './ripple'
import RippleButtonDemo from './ripple-button'
import SafariDemo from './safari'
import ScrollBasedVelocityDemo from './scroll-based-velocity'
import ScrollProgressDemo from './scroll-progress'
import ShimmerButtonDemo from './shimmer-button'
import ShineBorderDemo from './shine-border'
import ShinyButtonDemo from './shiny-button'
import SmoothCursorDemo from './smooth-cursor'
import SparklesTextDemo from './sparkles-text'
import SpinningTextDemo from './spinning-text'
import StripedPatternDemo from './striped-pattern'
import TerminalDemo from './terminal'
import Text3dFlipDemo from './text-3d-flip'
import TextAnimateDemo from './text-animate'
import TextRevealDemo from './text-reveal'
import TweetCardDemo from './tweet-card'
import TypingAnimationDemo from './typing-animation'
import VideoTextDemo from './video-text'
import WarpBackgroundDemo from './warp-background'
import WordRotateDemo from './word-rotate'

/**
 * 사이트 전용 데모. 레지스트리(/r/*.json)에는 포함되지 않는다.
 * `add-component` 스킬이 컴포넌트를 추가할 때 여기에 한 줄씩 등록한다.
 */
export const demos: Record<string, ComponentType> = {
  'android': AndroidDemo,
  'animated-beam': AnimatedBeamDemo,
  'animated-circular-progress-bar': AnimatedCircularProgressBarDemo,
  'animated-gradient-text': AnimatedGradientTextDemo,
  'animated-grid-pattern': AnimatedGridPatternDemo,
  'animated-list': AnimatedListDemo,
  'animated-shiny-text': AnimatedShinyTextDemo,
  'animated-theme-toggler': AnimatedThemeTogglerDemo,
  'aurora-text': AuroraTextDemo,
  'avatar-circles': AvatarCirclesDemo,
  'blur-fade': BlurFadeDemo,
  'border-beam': BorderBeamDemo,
  'code-comparison': CodeComparisonDemo,
  'comic-text': ComicTextDemo,
  'confetti': ConfettiDemo,
  'cool-mode': CoolModeDemo,
  'dia-text-reveal': DiaTextRevealDemo,
  'dock': DockDemo,
  'dot-pattern': DotPatternDemo,
  'dotted-map': DottedMapDemo,
  'file-tree': FileTreeDemo,
  'flickering-grid': FlickeringGridDemo,
  'glare-hover': GlareHoverDemo,
  'globe': GlobeDemo,
  'glyph-matrix': GlyphMatrixDemo,
  'grid-pattern': GridPatternDemo,
  'hero-video-dialog': HeroVideoDialogDemo,
  'hexagon-pattern': HexagonPatternDemo,
  'highlighter': HighlighterDemo,
  'hyper-text': HyperTextDemo,
  'icon-cloud': IconCloudDemo,
  'interactive-grid-pattern': InteractiveGridPatternDemo,
  'interactive-hover-button': InteractiveHoverButtonDemo,
  'iphone': IphoneDemo,
  'kinetic-text': KineticTextDemo,
  'lens': LensDemo,
  'light-rays': LightRaysDemo,
  'line-shadow-text': LineShadowTextDemo,
  'magic-card': MagicCardDemo,
  'marquee': MarqueeDemo,
  'meteors': MeteorsDemo,
  'morphing-text': MorphingTextDemo,
  'neon-gradient-card': NeonGradientCardDemo,
  'noise-texture': NoiseTextureDemo,
  'number-ticker': NumberTickerDemo,
  'orbiting-circles': OrbitingCirclesDemo,
  'particles': ParticlesDemo,
  'pixel-image': PixelImageDemo,
  'pointer': PointerDemo,
  'progressive-blur': ProgressiveBlurDemo,
  'pulsating-button': PulsatingButtonDemo,
  'rainbow-button': RainbowButtonDemo,
  'retro-grid': RetroGridDemo,
  'ripple': RippleDemo,
  'ripple-button': RippleButtonDemo,
  'safari': SafariDemo,
  'scroll-based-velocity': ScrollBasedVelocityDemo,
  'scroll-progress': ScrollProgressDemo,
  'shimmer-button': ShimmerButtonDemo,
  'shine-border': ShineBorderDemo,
  'shiny-button': ShinyButtonDemo,
  'smooth-cursor': SmoothCursorDemo,
  'sparkles-text': SparklesTextDemo,
  'spinning-text': SpinningTextDemo,
  'striped-pattern': StripedPatternDemo,
  'terminal': TerminalDemo,
  'text-3d-flip': Text3dFlipDemo,
  'text-animate': TextAnimateDemo,
  'text-reveal': TextRevealDemo,
  'tweet-card': TweetCardDemo,
  'typing-animation': TypingAnimationDemo,
  'video-text': VideoTextDemo,
  'warp-background': WarpBackgroundDemo,
  'word-rotate': WordRotateDemo,
}
