<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221228185845 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE sub_category_tool (sub_category_id INT NOT NULL, tool_id INT NOT NULL, PRIMARY KEY(sub_category_id, tool_id))');
        $this->addSql('CREATE INDEX IDX_64C58348F7BFE87C ON sub_category_tool (sub_category_id)');
        $this->addSql('CREATE INDEX IDX_64C583488F7B22CC ON sub_category_tool (tool_id)');
        $this->addSql('ALTER TABLE sub_category_tool ADD CONSTRAINT FK_64C58348F7BFE87C FOREIGN KEY (sub_category_id) REFERENCES sub_category (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE sub_category_tool ADD CONSTRAINT FK_64C583488F7B22CC FOREIGN KEY (tool_id) REFERENCES tool (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE sub_category_tool DROP CONSTRAINT FK_64C58348F7BFE87C');
        $this->addSql('ALTER TABLE sub_category_tool DROP CONSTRAINT FK_64C583488F7B22CC');
        $this->addSql('DROP TABLE sub_category_tool');
    }
}
