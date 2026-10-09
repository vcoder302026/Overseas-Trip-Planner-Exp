// ==========================================
// config.js - Application Configuration (SHARED)
// ==========================================
const ENV = 'Exp';

// ENVIRONMENT API ENDPOINTS
const EXP_URL = 'https://script.google.com/macros/s/AKfycbxfxKOfE7qGf7vjB_7GoJo6EI44ZSb_gVeHYKY8RIDvU5jjqBzDOJj4x0iljRFwmxs/exec';
const DEV_URL = 'https://script.google.com/macros/s/AKfycbxfxKOfE7qGf7vjB_7GoJo6EI44ZSb_gVeHYKY8RIDvU5jjqBzDOJj4x0iljRFwmxs/exec';
const PROD_URL = 'https://script.google.com/macros/s/AKfycbxfxKOfE7qGf7vjB_7GoJo6EI44ZSb_gVeHYKY8RIDvU5jjqBzDOJj4x0iljRFwmxs/exec';
const API_URL = ENV === 'Exp' ? EXP_URL : (ENV === 'Dev' ? DEV_URL : PROD_URL);

// ENVIRONMENT Google Drive Folders
const EXP_Drive_Folder_ID = '1j76RcNGRkbMGq6nkyiGOOGGtv5PkzhGW';
const DEV_Drive_Folder_ID = '162ZkzByQajQ-EE8OAoV76-VG5VXBX2BO';
const PROD_Drive_Folder_ID = '1ROD8FT46w5vpbZdWBGxTL59hSOKHIKH-';
const Drive_Folder_ID = ENV === 'Exp' ? EXP_Drive_Folder_ID : (ENV === 'Dev' ? DEV_Drive_Folder_ID : PROD_Drive_Folder_ID);

// ENVIRONMENT Google Sheet (Fallback)
const EXP_Sheet_ID = '1rbHQfYfTqIn1cCQ43zm0uJ3nIF6HaVWgBB58fK4WsNA';
const DEV_Sheet_ID = '13CzgUly1RuOp1BmrxG53bj9A0oHKP6vvrVWd_GNSPdg';
const PROD_Sheet_ID = '1rddr_0oqw9qtYllP4pTZ1ottrrSOrjQ0eczn83S3z4A';
const Fallback_Sheet_ID = ENV === 'Exp' ? EXP_Sheet_ID : (ENV === 'Dev' ? DEV_Sheet_ID : PROD_Sheet_ID);