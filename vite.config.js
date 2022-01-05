import { defineConfig } from "vite";
import react from "vite-preset-react"; // pas besoin d’écrire dans chaque fichier.import React from 'react'
import svgr from "vite-plugin-svgr"; //import {ReactComponent as Pic from '../path'(importer des fichiers SVG en tant que composant React)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
});
