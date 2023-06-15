import si from 'systeminformation';

async function getComputerInfo() {
  try {
    const diskData = await si.fsSize();
    diskData.forEach((disk) => {
      const totalSpace = disk.size / (1024 * 1024 * 1024);
      const usedSpace = disk.used / (1024 * 1024 * 1024);
      const availableSpace = disk.available / (1024 * 1024 * 1024);

      console.log('Drive:', disk.mount);
      console.log('Total Space:', totalSpace.toFixed(2), 'GB');
      console.log('Used Space:', usedSpace.toFixed(2), 'GB');
      console.log('Available Space:', availableSpace.toFixed(2), 'GB');
      console.log('----------------------------------');
    });
    const memData = await si.mem();
    const totalMemory = memData.total / (1024 * 1024 * 1024);
    const freeMemory = memData.free / (1024 * 1024 * 1024);
    const usedMemory = memData.used / (1024 * 1024 * 1024);

    console.log('Total RAM:', totalMemory.toFixed(2), 'GB');
    console.log('Free RAM:', freeMemory.toFixed(2), 'GB');
    console.log('Used RAM:', usedMemory.toFixed(2), 'GB');
    console.log('----------------------------------');

    const osData = await si.osInfo();
    console.log('Operating System:', osData.distro);
    console.log('Platform:', osData.platform);

    const cpuData = await si.cpu();
    console.log('CPU Model:', cpuData.brand);
    console.log('CPU Cores:', cpuData.cores);

    const networkData = await si.networkInterfaces();
    console.log('Network Interfaces:', networkData);
  } catch (error) {
    console.error('Error:', error);
  }
}

getComputerInfo();
