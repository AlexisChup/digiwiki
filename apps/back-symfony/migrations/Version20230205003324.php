<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230205003324 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE category_sub_category (category_id INT NOT NULL, sub_category_id INT NOT NULL, PRIMARY KEY(category_id, sub_category_id))');
        $this->addSql('CREATE INDEX IDX_6634D40A12469DE2 ON category_sub_category (category_id)');
        $this->addSql('CREATE INDEX IDX_6634D40AF7BFE87C ON category_sub_category (sub_category_id)');
        $this->addSql('ALTER TABLE category_sub_category ADD CONSTRAINT FK_6634D40A12469DE2 FOREIGN KEY (category_id) REFERENCES category (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE category_sub_category ADD CONSTRAINT FK_6634D40AF7BFE87C FOREIGN KEY (sub_category_id) REFERENCES sub_category (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE category_sub_category DROP CONSTRAINT FK_6634D40A12469DE2');
        $this->addSql('ALTER TABLE category_sub_category DROP CONSTRAINT FK_6634D40AF7BFE87C');
        $this->addSql('DROP TABLE category_sub_category');
    }
}
