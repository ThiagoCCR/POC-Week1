--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: tasks; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.tasks (
    id integer NOT NULL,
    title character varying(100) NOT NULL,
    description text NOT NULL,
    date date NOT NULL,
    done boolean DEFAULT false NOT NULL,
    responsible text NOT NULL
);


--
-- Name: tasks_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.tasks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: tasks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.tasks_id_seq OWNED BY public.tasks.id;


--
-- Name: tasks id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tasks ALTER COLUMN id SET DEFAULT nextval('public.tasks_id_seq'::regclass);


--
-- Data for Name: tasks; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.tasks VALUES (3, 'Fazer almoço', 'Arroz, feijão e carne', '2022-04-19', true, 'Carla');
INSERT INTO public.tasks VALUES (4, 'teste', 'testei', '2022-09-08', false, 'Carlos');
INSERT INTO public.tasks VALUES (2, 'Lavar o chão', 'Varrer e passar pano', '2022-04-18', true, 'João');
INSERT INTO public.tasks VALUES (5, 'limpar a caixa de areia', 'retirar o lixo após', '2022-05-18', false, 'Carla');
INSERT INTO public.tasks VALUES (6, 'limpar a caixa de areia', 'retirar o lixo após', '2022-05-15', false, 'Thiago');
INSERT INTO public.tasks VALUES (7, 'Fazrr almoço', 'sopa', '2022-03-15', true, 'Claudio');
INSERT INTO public.tasks VALUES (8, 'Fazer almoço', 'sopa', '2022-03-10', true, 'João');
INSERT INTO public.tasks VALUES (9, 'Fazer almoço', 'sopa', '2022-03-09', false, 'João');
INSERT INTO public.tasks VALUES (10, 'pintar a parede', 'de branco', '2022-03-09', false, 'João');


--
-- Name: tasks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.tasks_id_seq', 10, true);


--
-- Name: tasks tasks_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tasks
    ADD CONSTRAINT tasks_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

