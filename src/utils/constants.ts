export enum ErrorCode {
  INCOMPATIBLE_IMAGE_TYPE,
  UNKNOWN,
}

export const Tools = {
  ERASER: 'ERASER',
  ADD_POINT: 'ADD_POINT',
  ZOOM_WITH_WHEEL: 'ZOOM',
  ZOOM_WITH_CLICK: 'ZOOM_WITH_CLICK',
}

export const StoreKeys = {
  manualLandmarks: 'cephalo.workspace.manualLandmarks',
  cursorStack: 'cephalo.workspace.canvas.cursorStack',
  scaleValue: 'cephalo.workspace.canvas.scale.value',
  scaleOrigin: 'cephalo.workspace.canvas.scale.origin',
  activeTool: 'cephalo.workspace.canvas.activeTool',
  canvasHeight: 'cephalo.workspace.canvas.height',
  canvasWidth: 'cephalo.workspace.canvas.width',
  imageHeight: 'cephalo.workspace.image.height',
  imageWidth: 'cephalo.workspace.image.width',
  imageData: 'cephalo.workspace.image.data',
  imageLoadError: 'cephalo.workspace.image.load.error',
  imageIsLoading: 'cephalo.workspace.image.load.isLoading',
  imageBrightness: 'cephalo.workspace.image.corrections.brightness',
  imageContrast: 'cephalo.workspace.image.corrections.contrast',
  imageInvert: 'cephalo.workspace.image.corrections.invert',
  imageFlipX: 'cephalo.workspace.image.corrections.flipX',
  imageFlipY: 'cephalo.workspace.image.corrections.flipY',
}

/**
 * Events are just Redux actions. 
 * The name 'event' however describes better what an action does, 
 * because Redux action should never produce side effects, they 
 * just indicate that something has happend.
 */
export const Event = {
  /* Worker creation and termination */
  WORKER_CREATED: 'WORKER_CREATED',
  WORKER_TERMINATED: 'WORKER_TERMINATED',
  WORKER_STATUS_CHANGED: 'WORKER_STATUS_CHANGED',

  /* SMARTS! */
  SET_IS_CEPHALO_REQUESTED: 'SET_IS_CEPHALO_REQUESTED',

  /* Workspace */
  TOGGLE_TOOL_REQUESTED: 'TOGGLE_TOOL_REQUESTED',
  ENABLE_TOOL_REQUESTED: 'ENABLE_TOOL_REQUESTED',
  DISABLE_TOOL_REQUESTED: 'DISABLE_TOOL_REQUESTED',
  CANVAS_RESIZED: 'CANVAS_RESIZED',
  ADD_MANUAL_LANDMARK_REQUESTED: 'ADD_MANUAL_LANDMARK_REQUESTED',
  REMOVE_MANUAL_LANDMARK_REQUESTED: 'REMOVE_MANUAL_LANDMARK_REQUESTED',
  SET_ACTIVE_ANALYSIS_REQUESTED: 'SET_ACTIVE_ANALYSIS_REQUESTED',
  FLIP_IMAGE_X_REQUESTED: 'FLIP_IMAGE_X_REQUESTED',
  SET_IMAGE_BRIGHTNESS_REQUESTED: 'SET_IMAGE_BRIGHTNESS_REQUESTED',
  SET_IMAGE_CONTRAST_REQUESTED: 'SET_IMAGE_CONTRAST_REQUESTED',
  INVERT_IMAGE_REQUESTED: 'INVERT_IMAGE_REQUESTED',
  LOAD_IMAGE_REQUESTED: 'LOAD_IMAGE_REQUESTED',
  LOAD_IMAGE_SUCCEEDED: 'LOAD_IMAGE_SUCCEEDED',
  LOAD_IMAGE_FAILED: 'LOAD_IMAGE_FAILED',
  RESET_WORKSPACE_REQUESTED: 'RESET_WORKSPACE_REQUESTED',
  IGNORE_WORKSPACE_ERROR_REQUESTED: 'IGNORE_WORKSPACE_ERROR_REQUESTED',

  REDO_REQUESTED: 'REDO_REQUESTED',
  UNDO_REQUESTED: 'UNDO_REQUESTED',

  SET_MOUSE_CURSOR_REQUESTED: 'SET_MOUSE_CURSOR_REQUESTED',
  REMOVE_MOUSE_CURSORS_REQUESTED: 'REMOVE_MOUSE_CURSORS_REQUESTED',

  ADD_UNKOWN_MANUAL_LANDMARK_REQUESTED: 'ADD_UNKOWN_MANUAL_LANDMARK_REQUESTED',

  SET_SCALE_REQUESTED: 'SET_SCALE_REQUESTED',

  HIDE_LANDMARK_TEMPORARILY_REQUESTED: 'HIDE_LANDMARK_TEMPORARILY_REQUESTED',
  SHOW_TEMORARILY_HIDDEN_LANDMARK_REQUESTED: 'SHOW_TEMORARILY_HIDDEN_LANDMARK_REQUESTED',

  HIGHLIGHT_STEPS_ON_CANVAS_REQUESTED: 'HIGHLIGHT_STEPS_ON_CANVAS_REQUESTED',
  UNHIGHLIGHT_STEPS_ON_CANVAS_REQUESTED: 'UNHIGHLIGHT_STEPS_ON_CANVAS_REQUESTED',

  /* Analysis fetching */
  FETCH_ANALYSIS_REQUESTED: 'FETCH_ANALYSIS_REQUESTED',
  FETCH_ANALYSIS_SUCCEEDED: 'FETCH_ANALYSIS_SUCCEEDED',
  FETCH_ANALYSIS_FAILED: 'FETCH_ANALYSIS_FAILED',

  /* Automatic tracing */
  TRY_AUTOMATIC_STEPS_REQUESTED: 'TRY_AUTOMATIC_STEPS_REQUESTED',
  STEP_EVALUATION_STARTED: 'STEP_EVALUATION_STARTED',
  STEP_EVALUATION_FINISHED: 'STEP_EVALUATION_FINISHED',

  /* Analysis results */
  SHOW_ANALYSIS_RESULTS_REQUESTED: 'SHOW_ANALYSIS_RESULTS_REQUESTED',
  CLOSE_ANALYSIS_RESULTS_REQUESTED: 'CLOSE_ANALYSIS_RESULTS_REQUESTED',

  /* Browser compatiblity checking */
  BROWSER_COMPATIBLITY_CHECK_REQUESTED: 'BROWSER_COMPATIBLITY_CHECK_REQUESTED',
  BROWSER_COMPATIBLITY_CHECK_SUCCEEDED: 'BROWSER_COMPATIBLITY_CHECK_SUCCEEDED',
  BROWSER_COMPATIBLITY_CHECK_FAILED: 'BROWSER_COMPATIBLITY_CHECK_FAILED',
  IGNORE_BROWSER_COMPATIBLITY_REQUESTED: 'IGNORE_BROWSER_COMPATIBLITY_REQUESTED',
  ENFORCE_BROWSER_COMPATIBLITY_REQUESTED: 'ENFORCE_BROWSER_COMPATIBLITY_REQUESTED',
  BROWSER_COMPATIBLITY_CHECK_MISSING_FEATURE_DETECTED: 'BROWSER_COMPATIBLITY_CHECK_MISSING_FEATURE_DETECTED',

  /* State persistence */
  LOAD_PERSISTED_STATE_REQUESTED: 'LOAD_PERSISTED_STATE_REQUESTED',
  LOAD_PERSISTED_STATE_SUCCEEDED: 'LOAD_PERSISTED_STATE_SUCCEEDED',
  LOAD_PERSISTED_STATE_FAILED: 'LOAD_PERSISTED_STATE_FAILED',
  PERSIST_STATE_REQUESTED: 'PERSIST_STATE_REQUESTED',
  PERSIST_STATE_SUCCEEDED: 'PERSIST_STATE_SUCCEEDED',
  PERSIST_STATE_FAILED: 'PERSIST_STATE_FAILED',
};

export enum ImageWorkerAction {
  READ_AS_DATA_URL,
  PERFORM_EDITS,
  IS_CEPHALO,
};

export const Cursor = {
  ADD_LANDMARK: 'ADD_LANDMARK',
  REMOVE_LANDMARK: 'REMOVE_LANDMARK',
  REMOVE_LANDMARK_NO_TARGET: 'REMOVE_LANDMARK_NO_TARGET',
  REMOVE_LANDMARK_DISABLED: 'REMOVE_LANDMARK_DISABLED',
  MOVE_LANDMARK: 'MOVE_LANDMARK',
  MOVING_LANDMARK: 'MOVING_LANDMARK',
  ZOOM: 'ZOOM',
  ZOOM_IN: 'ZOOM_IN',
  ZOOM_OUT: 'ZOOM_OUT',
  EXPLAIN: 'EXPLAIN',
};


const cursorToCSSMap: { [id: string]: (null | string)[] } = {
  [Cursor.ADD_LANDMARK]: [null, 'cell', 'crosshair'],
  [Cursor.REMOVE_LANDMARK]: ['draw-eraser', 'cell', 'crosshair'],
  [Cursor.REMOVE_LANDMARK_NO_TARGET]: [null, 'not-allowed'],
  [Cursor.REMOVE_LANDMARK_DISABLED]: [null, 'not-allowed', 'no-drop'],
  [Cursor.MOVE_LANDMARK]: [null, 'move'],
  [Cursor.MOVING_LANDMARK]: [null, 'grabbing'],
  [Cursor.ZOOM]: [null, 'zoom-in'],
  [Cursor.ZOOM_IN]: [null, 'zoom-in'],
  [Cursor.ZOOM_OUT]: [null, 'zoom-out'],
  [Cursor.EXPLAIN]: [null, 'help'],
};

import memoize from 'lodash/memoize';

const requireCursor = require.context('file!./cursors', false, /.png$/i);

export const mapCursor = memoize((cursor: string | undefined): string => {
  let value: string = '';
  if (cursor !== undefined) {
    const customCursor = cursorToCSSMap[cursor][0];
    if (customCursor !== null) {
      const url = requireCursor(`./${customCursor}.png`);
      value = `url(${url}) 0 22, auto`;
    } else {
      value = cursorToCSSMap[cursor][1] || 'auto';
    }
    return value;
  }
  return 'auto';
});