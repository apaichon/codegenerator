CREATE TABLE <schema>.<name>
(
    id integer NOT NULL DEFAULT nextval('<name>_id_seq'::regclass),
    name_en_us character varying(50) COLLATE pg_catalog."default",
    name_th_th character varying(50) COLLATE pg_catalog."default",
    description character varying(255) COLLATE pg_catalog."default",
    "createdAt" timestamp with time zone NOT NULL,
    "createdBy" character varying(50) COLLATE pg_catalog."default",
    "updatedAt" timestamp with time zone,
    "updatedBy" character varying(50) COLLATE pg_catalog."default",
    "transStatusId" integer NOT NULL,
    CONSTRAINT <name>_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE <schema>.<name>
    OWNER to <owner>;