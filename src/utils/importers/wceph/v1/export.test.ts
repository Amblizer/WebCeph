import exportFile from './export';

test('WCeph Exporter', async () => {
  const state: Partial<StoreState> = {
    'workspace.images.props': {
      img_1: {
        name: null,
        type: 'ceph_lateral',
        flipX: true,
        flipY: false,
        brightness: 0.7,
        contrast: 0.1,
        height: 500,
        width: 700,
        scaleFactor: null,
        invertColors: true,
        analysis: {
          activeId: 'downs',
        },
        data: 'whatever',
      },
    },
    'workspace.images.tracing': {
      img_1: {
        mode: 'assisted',
        manualLandmarks: {
          N: {
            x: 400,
            y: 300,
          },
        },
        skippedSteps: {
          S: true,
        },
      },
    },
  };
  const file = await exportFile(state as StoreState, { });
  expect(file).toBeInstanceOf(File);
});
