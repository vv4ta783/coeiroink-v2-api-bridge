import { Hono } from "@hono/hono";
import ky from "ky";

export type Provider = ({ baseClient, app }: { baseClient: typeof ky; app: Hono }) => void;
