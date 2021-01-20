CREATE SEQUENCE <schema>.<name>_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

ALTER SEQUENCE <schema>.<name>_id_seq
    OWNER TO <owner>;