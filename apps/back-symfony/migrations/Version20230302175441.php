<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230302175441 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP SEQUENCE tags_id_seq CASCADE');
        $this->addSql('CREATE SEQUENCE tag_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE tag (id INT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE tool_tag (tool_id INT NOT NULL, tag_id INT NOT NULL, PRIMARY KEY(tool_id, tag_id))');
        $this->addSql('CREATE INDEX IDX_FA002AA98F7B22CC ON tool_tag (tool_id)');
        $this->addSql('CREATE INDEX IDX_FA002AA9BAD26311 ON tool_tag (tag_id)');
        $this->addSql('ALTER TABLE tool_tag ADD CONSTRAINT FK_FA002AA98F7B22CC FOREIGN KEY (tool_id) REFERENCES tool (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE tool_tag ADD CONSTRAINT FK_FA002AA9BAD26311 FOREIGN KEY (tag_id) REFERENCES tag (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE tool_tags DROP CONSTRAINT fk_b4fed46d8f7b22cc');
        $this->addSql('ALTER TABLE tool_tags DROP CONSTRAINT fk_b4fed46d8d7b4fb4');
        $this->addSql('DROP TABLE tool_tags');
        $this->addSql('DROP TABLE tags');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('DROP SEQUENCE tag_id_seq CASCADE');
        $this->addSql('CREATE SEQUENCE tags_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE tool_tags (tool_id INT NOT NULL, tags_id INT NOT NULL, PRIMARY KEY(tool_id, tags_id))');
        $this->addSql('CREATE INDEX idx_b4fed46d8f7b22cc ON tool_tags (tool_id)');
        $this->addSql('CREATE INDEX idx_b4fed46d8d7b4fb4 ON tool_tags (tags_id)');
        $this->addSql('CREATE TABLE tags (id INT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('ALTER TABLE tool_tags ADD CONSTRAINT fk_b4fed46d8f7b22cc FOREIGN KEY (tool_id) REFERENCES tool (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE tool_tags ADD CONSTRAINT fk_b4fed46d8d7b4fb4 FOREIGN KEY (tags_id) REFERENCES tags (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE tool_tag DROP CONSTRAINT FK_FA002AA98F7B22CC');
        $this->addSql('ALTER TABLE tool_tag DROP CONSTRAINT FK_FA002AA9BAD26311');
        $this->addSql('DROP TABLE tag');
        $this->addSql('DROP TABLE tool_tag');
    }
}
