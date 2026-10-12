import { Composition, Folder } from 'remotion';
import { ConversationExperience, type ExperienceKind } from './conversation-experience';

const desktop = { width: 1280, height: 720 };
const poster = { width: 1280, height: 900 };
const portrait = { width: 720, height: 900 };

const FeatureComposition = ({ kind, compact = false, poster = false }: { kind: ExperienceKind; compact?: boolean; poster?: boolean }) => (
  <ConversationExperience kind={kind} compact={compact} poster={poster} />
);

export const RemotionRoot = () => (
  <>
    <Folder name="Conversational-Experience">
      <Composition id="Hero" component={FeatureComposition} durationInFrames={360} fps={30} width={desktop.width} height={desktop.height} defaultProps={{ kind: 'hero', compact: false }} />
      <Composition id="Technical-Comparison" component={FeatureComposition} durationInFrames={270} fps={30} width={desktop.width} height={desktop.height} defaultProps={{ kind: 'technical', compact: false }} />
      <Composition id="Product-Recommendations" component={FeatureComposition} durationInFrames={270} fps={30} width={desktop.width} height={desktop.height} defaultProps={{ kind: 'recommendations', compact: false }} />
      <Composition id="Structured-Explanations" component={FeatureComposition} durationInFrames={270} fps={30} width={desktop.width} height={desktop.height} defaultProps={{ kind: 'explanations', compact: false }} />
      <Composition id="Interactive-Actions" component={FeatureComposition} durationInFrames={270} fps={30} width={desktop.width} height={desktop.height} defaultProps={{ kind: 'actions', compact: false }} />
    </Folder>
    <Folder name="Conversational-Experience-Mobile">
      <Composition id="Hero-Mobile" component={FeatureComposition} durationInFrames={360} fps={30} width={portrait.width} height={portrait.height} defaultProps={{ kind: 'hero', compact: true }} />
      <Composition id="Technical-Comparison-Mobile" component={FeatureComposition} durationInFrames={270} fps={30} width={portrait.width} height={portrait.height} defaultProps={{ kind: 'technical', compact: true }} />
      <Composition id="Product-Recommendations-Mobile" component={FeatureComposition} durationInFrames={270} fps={30} width={portrait.width} height={portrait.height} defaultProps={{ kind: 'recommendations', compact: true }} />
      <Composition id="Structured-Explanations-Mobile" component={FeatureComposition} durationInFrames={270} fps={30} width={portrait.width} height={portrait.height} defaultProps={{ kind: 'explanations', compact: true }} />
      <Composition id="Interactive-Actions-Mobile" component={FeatureComposition} durationInFrames={270} fps={30} width={portrait.width} height={portrait.height} defaultProps={{ kind: 'actions', compact: true }} />
    </Folder>
    <Folder name="Conversational-Experience-Posters">
      <Composition id="Technical-Poster" component={FeatureComposition} durationInFrames={270} fps={30} width={poster.width} height={poster.height} defaultProps={{ kind: 'technical', poster: true }} />
      <Composition id="Product-Recommendations-Poster" component={FeatureComposition} durationInFrames={270} fps={30} width={poster.width} height={poster.height} defaultProps={{ kind: 'recommendations', poster: true }} />
      <Composition id="Structured-Explanations-Poster" component={FeatureComposition} durationInFrames={270} fps={30} width={poster.width} height={poster.height} defaultProps={{ kind: 'explanations', poster: true }} />
      <Composition id="Interactive-Actions-Poster" component={FeatureComposition} durationInFrames={270} fps={30} width={poster.width} height={poster.height} defaultProps={{ kind: 'actions', poster: true }} />
    </Folder>
    <Folder name="Conversational-Experience-Posters-Mobile">
      <Composition id="Technical-Poster-Mobile" component={FeatureComposition} durationInFrames={270} fps={30} width={portrait.width} height={portrait.height} defaultProps={{ kind: 'technical', compact: true, poster: true }} />
      <Composition id="Product-Recommendations-Poster-Mobile" component={FeatureComposition} durationInFrames={270} fps={30} width={portrait.width} height={portrait.height} defaultProps={{ kind: 'recommendations', compact: true, poster: true }} />
      <Composition id="Structured-Explanations-Poster-Mobile" component={FeatureComposition} durationInFrames={270} fps={30} width={portrait.width} height={portrait.height} defaultProps={{ kind: 'explanations', compact: true, poster: true }} />
      <Composition id="Interactive-Actions-Poster-Mobile" component={FeatureComposition} durationInFrames={270} fps={30} width={portrait.width} height={portrait.height} defaultProps={{ kind: 'actions', compact: true, poster: true }} />
    </Folder>
  </>
);
